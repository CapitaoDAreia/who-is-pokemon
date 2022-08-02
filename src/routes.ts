import { Router } from 'express'
import { getPokemon } from './services/pokemon-service'
import { getRanking } from './services/ranking-service'
import { createUser, getUserById, deleteById } from './services/user-service'

const routes = Router()

// GET: /pokemon -> um pokemon aleatorio
routes.get('/pokemon', getPokemon)

// POST: /user -> cadastrar um user / -> name: string, email: string, image: string 
routes.post('/user', createUser)

// GET: /user/:id -> pegar as informações de um user
routes.get('/user/:id', getUserById)


routes.put("/user/:id", function(){});

//delete user
routes.delete("/user/:id", deleteById);

//ranking
routes.get("/ranking", getRanking);



export default routes