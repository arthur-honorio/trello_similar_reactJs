const mongoose = require("mongoose")

function connect () {
  mongoose.connect("mongodb://localhost:27017/rav-teste?readPreference=primary&appname=MongoDB%20Compass&ssl=false")

  const db = mongoose.connection

  db.once("open", _ => console.log("Connected to Database."))

  db.on("error", console.error.bind(console, "Connection Error: "))
}

module.exports = { connect }