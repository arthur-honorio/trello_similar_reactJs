const ColumnsModel = require("../models/Columns")
const TasksModel = require("../models/Tasks")

async function get(req,res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  const column = await ColumnsModel.find(obj)
  
  res.send({
    column,
  })
}

async function post(req, res) {
  const {
    name,
    color,
  } = req.body

  const column =  new ColumnsModel({
    name: name,
    color: color,
  })

  column.save()
  res.send({
    message: "success",
    column,
  })
}

async function put (req, res) {
  const { id } = req.params

  const column = await ColumnsModel.findOneAndUpdate( { _id: id }, req.body, { new: true })

  res.send({
    message: "success",
    column,
  })
}

async function remove(req, res) {
  const { id } = req.params

  const columnRemove = await ColumnsModel.deleteOne({ _id: id })
  const tasksRemove = await TasksModel.deleteMany({ columnId: id })

  res.send({
    message: [
      columnRemove,
      tasksRemove,
    ]})
}

module.exports = {
  get,
  post,
  put,
  remove,
}