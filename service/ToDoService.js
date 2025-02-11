const ToDo = require("../models/ToDo");

async function getAllTodos(){
    return ToDo.find();
}

async function getTodoById(id){
    let singleToDo = await ToDo.findById(id);
    return singleToDo;
}

async function createToDo(todo){
    let newTodo = new ToDo(todo);
    return newTodo.save();
}

async function updateTodo(id,todo){
    let isExist = await ToDo.findById(id);
    if(!isExist){
        throw new Error("Todo id "+id+" not found");
    }
    let updateTodo = await ToDo.findByIdAndUpdate(id,todo,{new:true});
    return updateTodo;
}

async function deleteTdo(id){
    let isExist = await ToDo.findById(id);
    if(!isExist){
        throw new Error("Todo is "+id+" not found");
    }
    let deletedTodo = await ToDo.findByIdAndDelete(id);
    return deletedTodo;
}

module.exports = {
    getAllTodos,
    getTodoById,
    createToDo,
    updateTodo,
    deleteTdo,
}