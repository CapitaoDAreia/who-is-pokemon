import {Router, Request, Response} from 'express'
import { getPokemon } from './services/pokemon-service'

const routes = Router()

// GET: /pokemon -> um pokemon aleatorio
routes.get('/pokemon', getPokemon)


// POST: /user -> cadastrar um user
routes.post('/user', function(req: Request, res: Response) {
    res.json({
        
      })
})


// GET: /user/:id -> pegar as informações de um user
routes.get('/user/:id', function(req: Request, res: Response) {
    res.json(
        {}
    )
})



export default routes