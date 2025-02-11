var express = require('express');
var allToDo = require('../ Controller/TodoController');
var router = express.Router();

router.get('/',allToDo.getAllTodo);
router.post('/',allToDo.createTodo);
router.put('/:id',allToDo.updateTodo);
router.get('/:id',allToDo.getTodoById)
router.delete('/:id',allToDo.deleteTodo)

module.exports = router;