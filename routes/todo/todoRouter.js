var express = require('express');
var router = express.Router();

const { fetchTodo, deleteTodo, postTodo, updateToById } = require('./controller/todoController');

router.get('/', fetchTodo);
router.delete('/delete-by-id/:id', deleteTodo);
router.post('/create-todo', postTodo);
router.put('/update-by-id/:id', updateToById);


module.exports = router;