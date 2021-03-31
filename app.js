const express = require('express')
const app = express()
//const { uuid } = require('uuidv4')
 const { v4: uuidv4 } = require('uuid');

const projects = []

app.use(express.json())

app.get('/', (req, response) => {
    return response.json([
        'proj 1',
        'proj 2',
    ])
})

app.get('/projects', (req, response) => {
    const {title, owner} = req.query
    //console.log(title, owner)

    return response.json(projects)
})

app.put('/projects/:id', (req, response) => {
    const params = req.params
    console.log(params)

    response.json([
        'proj 1',
        'proj 2',
        'proj 3',
        'proj 4',
        'proj 5',
        'proj 6',
    ])
})

app.post('/projects', (req, response) => {
    const {title, owner} = req.body
    
    const project = { id: uuidv4(), title, owner }

    projects.push(project) // criacao do projeto para o nosso array
    
    console.log(project.id)
    return response.json(project) // sempre retornar o objeto
})

app.delete('/projects/:id', (req, response) => {
    response.json([
        'proj 50',
        'proj 6',
    ])
})

app.listen(3000, () => {
    console.log('alguma treta rolou ae')
})


/*
    query params: filtros e paginacao
    route params: identificar recursos na hora de atualizar ou deletar
    request params:
*/