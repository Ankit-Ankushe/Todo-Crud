
const express = require('express');
const app = express();
const Todos = require('./todos')

app.use(express.json())
const todos = new Todos();

const PORT = 3002;

//todos {
//     id:1,
//     task : 'sleep',
//     createdAt:date()
// }
app.get('/todos', (req, res) => {
    return res.send({
        todos: todos.getTodos()
    })
})

app.post('/todos', (req, res) => {
    try {
        const { task } = req.body;
        todos.addTodo(task)
        return res.send('todo added')

    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal server error')
    }
})

app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    console.log(typeof(id))
    try {
        todos.deleteTodo(id)
    } catch (error) {
        return res.status(404).send('todo not exist')
    }
    return res.send('deleted')
})

app.listen(PORT, () => {
    console.log('server started');
})