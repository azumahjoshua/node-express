// console.log('Express Tutorial')
// const { response } = require('express')
// const http = require('http')
// const { readFileSync } = require('fs')
// 
// // const homePage = readFileSync('./navbar-app/index.html')
// // const server = http.createServer((requesst, response) => {
    // const url = requesst.url
    // if (url === '/') {
        // // response.writeHead(200, { 'content-type': 'text/html' })
        // response.write(homePage)
        // response.end()
    // }
// })
// 
// server.listen(3500,() => {
    // console.log("Server is working well")
// })

// const express = require('express')
// const path = require('path')
// const app = express()
// const { products } = require('./data')
// app.use(express.static('./public'))
// app.get('/api/products', (requesst, response) => {
    // // const newProucts = products.map((products) => {
        // const { id, name, image } = products
        // return {id, name, image}
    // })
    // response.json(newProucts)
// })
// app.get('api/v1/query', (request, response) => {
    // console.log(request.query)
    // const { search,limit} = request.query
    // let sortedProducts = [...products]
    // if (search) {
        // // sortedProducts = sortedProducts.filter((product) => {
            // return product.name.startsWith(search)
        // })
    // }
    // if (limit) {
        // // sortedProducts = sortedProducts.slice(0, Number(limit))
    // }
    // if (sortedProducts.length < 1) {
        // // return response.status(200).json({ success: true, data:[] })
    // }
    // response.status(200).json(sortedProducts)
    //
// })
// // app.get('/api/products/:productID', (request, response) => {
    // const { productID } = request.params
    // // const singleProduct = products.find((product) => {
        // product.id === Number(productID)
// 
    // })
    // if (!singleProduct) {
        // // return response.status(404).send("Product Does Exist")
    // }
    // const newProucts = products.map((products) => {
        // const { id, name, image } = products
        // return {id, name, image}
    // })
    // response.json(singleProduct)
// })
// app.get('/', (requesst, response) => {
    // response.json(products)
    // response.status(200).send("Home Page")
// })
// 
// app.get('/about', (requesst, response) => {
    //
    //  response.status(200).send("About Page")
// })
// app.all('*', (requesst,response) => {
    //  response.status(404).send("Home Page")
// })
// app.post()


/**
 * Middleware */
const express = require('express')
// const logger = require('./logger')
// const morgan = require('morgan')
// const authorize = require('./authroize')

let { people } = require('./data')
const app = express()

// app.use([logger,authorize])
// app.use(morgan('tiny'))
// app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false}))
app.get('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(404).json({success : false,msg: 'please provide name value'})
    }
    res.status(200).json({success: true,person: name})
})

app.post('/login',(request,response) => {
    const { name } = request.body
    if (name) {
        return response.status(200).send(`Welcome ${name}`)
    }
    response.status(401).send("Please provide a name")
})

app.post('/api/postman/people', (request,response) => {
    const { name } = response.body 
    console.log(name)
    if (!name) {
         return response.status(404).json({success : false,msg: 'please  provide name value'})
    }
    response.status(201).send({success: true,data: [...people,name]})
})
// app.get('/about',(req, res) => {
    // res.send('About')
// })
// app.get('/api/items', (req, res) => {
    // res.send('Items')
// })
app.put('/api/people/:id', (request,response) => {
    const { id } = request.params
    const { name } = request.body
    console.log(id, name)
    const person = people.find((person) => {
        person.id === Number(id)
    })
     if (!person) {
         return response.status(404).json({ success: false, msg: 'please  provide name value' })
 }
    // response.send(`Hello world`)

})
app.listen(5000, () => {
    console.log("server is listenint on port 5000")
})