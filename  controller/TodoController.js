const ToDoService = require("../service/ToDoService");

async function getAllTodo(req, res, next) {
  let todos = await ToDoService.getAllTodos();
  res.json(todos);
}

async function createTodo(req, res, next) {
  try {
    let todo = await ToDoService.createToDo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function updateTodo(req, res, next) {
  try {
    let id = req.params.id;
    let updateTodo =await ToDoService.updateTodo(id, req.body);
    res.json(updateTodo);
  } catch (err) {
    
    res.status(400).send(err.message);
  }
}

async function getTodoById(req, res, next) {
  let id = req.params.id;
  try {
    let singleToDo = await ToDoService.getTodoById(id);
    res.json(singleToDo);
  } catch (err) {
    res.status(404).json("Id " + id + "not found");
  }
}

async function deleteTodo(req,res,next){
  let id = req.params.id;
  try{
  let deletedTodo = await ToDoService.deleteTdo(id);
  res.json(deletedTodo);
  }catch(err){
    res.status(404).send("Id " + id + "not found");
  }
}

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  getTodoById,
  deleteTodo
};
