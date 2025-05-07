import express from 'express'
import { PORT } from './config.js'

const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Hola mundo</h1>')
})

app.post('/login', (req, res)=>{
    res.json({message:"login"})
})

app.post('/register', (req, res) =>{})

app.post('/logout', (req, res) =>{})
app.post('/protected', (req, res) =>{})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})





