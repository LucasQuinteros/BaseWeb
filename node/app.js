import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import itemsRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/items',itemsRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa')

} catch (error) {
    console.log('Error al conectarse a la base ${error}')    
}

/*app.get('/', (req,res) => {
    console.log("Hola mundo")
})*/

app.listen(8000,()=>{
    console.log('servidor corriendo en localhost:8000')
})