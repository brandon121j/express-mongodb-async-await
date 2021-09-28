const Todo = require('../model/Todo');

async function fetchTodo(req, res) {
    try {
        let payload = await Todo.find(req.body);

        res.json({ message: "SUCCESS", payload })
    } catch (error) {
        res
            .status(500)
            .json({ message: "ERROR", error: error.message })
    }
}

async function deleteTodo(req, res) {
    try {
        let payload = await Todo.findByIdAndDelete(req.params.id);

        res.json({ message: "SUCCESS", payload })
    } catch(error) {
        res
            .status(500)
            .json({ message: "ERROR", error: error.message })
    }
}

const postTodo = async(req, res) => {
    try {
        const createTodo = new Todo({
            todo: req.body.todo,
            isDone: req.body.isDone
        })

        let payload = await createTodo.save()

        res.json({ message: "SUCCESS", payload })

    } catch(error) {
        res
            .status(500)
            .json({ message: "ERROR", error: error.message })
    }
}

async function updateToById(req, res) {
    try {
        let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        res.json({ message: "SUCCESS", payload: updatedTodo })
    } catch(error) {
        res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
    }
}


module.exports = {
    fetchTodo,
    deleteTodo,
    postTodo,
    updateToById
}