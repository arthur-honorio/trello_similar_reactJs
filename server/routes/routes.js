const router = require("express").Router()

const ColumnsController = require("../controllers/Columns")
const TasksController = require("../controllers/Tasks")

router.get("/board/columns/:id?", ColumnsController.get)
router.post("/board/columns", ColumnsController.post)
router.put("/board/columns/:id", ColumnsController.put)
router.delete("/board/columns/:id", ColumnsController.remove)

router.get("/board/tasks/:id?", TasksController.get)
router.post("/board/tasks/", TasksController.post)
router.put("/board/tasks/:id", TasksController.put)
router.delete("/board/tasks/:id", TasksController.remove)

module.exports = router