const { randomUUID } = require('crypto');
const fs = require('fs')

class Todos {
    constructor() {
        this.todos = []
    }
    getTodos() {
        return this.todos
    }
    addTodo(task) {
        let data = {
            id: randomUUID(),
            task,
            createdAt: new Date()
        }
        this.todos.push(data)
    }
    deleteTodo(id) {
        let index = null;
        this.todos.forEach((todo, i) => {
            if (todo.id == id) {
                index = i;
            }
        })
        if(index == null){
            throw new Error('does not found')
        }
        this.todos.splice(index,1)
    }
}
module.exports  = Todos