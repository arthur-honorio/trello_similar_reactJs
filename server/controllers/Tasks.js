const TasksModel = require("../models/Tasks")

async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const tasks = await TasksModel.find(obj)

  res.send({
    tasks
  })
}

async function post(req, res) {
  const {
    name,
    columnId,
    content,
  } = req.body

  const task = await new TasksModel({
    name,
    columnId,
    content,
  })

  task.save()
  res.send({
    message: "success",
    task,
  })
}

async function put(req, res) {
  const { id } = req.params

  const task = await TasksModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: "success",
    task,
  })
}

async function remove(req, res) {
  const { id } = req.params

  const remove = await TasksModel.deleteOne({ _id: id })

  res.send({
    message: remove,
  })
}

module.exports = {
  get,
  post,
  put,
  remove
}