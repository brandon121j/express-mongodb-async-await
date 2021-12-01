var express = require('express');
var router = express.Router();

const { fetchTodo, deleteTodo, postTodo, updateTodoById } = require('./controller/todoController');

router.get('/', fetchTodo);
router.delete('/delete-by-id/:id', deleteTodo);
router.post('/create-todo', postTodo);
router.put('/update-by-id/:id', updateTodoById);


module.exports = router;