const express = require("express")
const cors = require("cors")

const routes = require("./routes/routes")
const db = require("./database/db")

const app = express()

db.connect()

app.use(cors())

app.use(express.json())

app.use("/api", routes)


const port = process.env.PORT || 8080
app.listen(port, _ => console.log(`Server listening on port ${port}`))