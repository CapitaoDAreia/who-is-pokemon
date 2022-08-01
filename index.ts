import { initDatabase } from './src/config/database'
import {server} from './src/server'

initDatabase()

server.listen(4200, () => {
    console.log("server started in: http://localhost:4200")
})