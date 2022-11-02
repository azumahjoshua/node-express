const { response } = require("express");


const getAllTask = (request, response) => {
    response.send('all items')
}

const createTask = (request, response) => {
     response.send('creattask')
}

module.exports = {getAllTask,createTask}