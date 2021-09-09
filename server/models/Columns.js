const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: String,
  color: String,
})

const ColumnsModel = new mongoose.model("colunas", schema)

module.exports = ColumnsModel