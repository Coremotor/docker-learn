const Router = require("express");
const {
  getToDos,
  getToDo,
  addToDo,
  editToDo,
  deleteToDo,
} = require("../src/controllers/todos");

const router = Router();

router.get("/todos", getToDos);
router.get("/todos/:id", getToDo);
router.post("/todos", addToDo);
router.put("/todos/:id", editToDo);
router.delete("/todos/:id", deleteToDo);

module.exports = router;
