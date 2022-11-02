console.log('Task Manager App')
const { application } = require('express')
const express = require('express')
const app = express()
const tasks = require('./routes/task')

//middleware

app.use(express.json())
// get all  task
app.use(express.static('./public'))
app.get('/api/v1/tasks', (resquest, response) => {
    // const { }
    response.send("Task manger")
})

app.use('/api/v1/tasks',tasks)

app.listen(3500, () => {
    console.log("Server is working")
})