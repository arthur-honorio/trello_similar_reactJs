const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: String,
  columnId: {
    type: String,
    required: true,
  },
  content: String,
})

const TasksModel = new mongoose.model("atividades", schema)

module.exports = TasksModel