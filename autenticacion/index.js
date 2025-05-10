import express from 'express'
import jwt from 'jsonwebtoken'
import { PORT } from './config.js'
import { UserRepository } from './user-repository.js'
import { JWT_SECRET } from './config.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json())



app.get('/', (req, res) => {
    res.render('login')
})

app.get('/protected', (req, res) => {
    res.render('protected', {username: req.session.username})
})

app.post('/login', async (req, res)=>{
    const {username, password} = req.body
    console.log(username, password)
    try{
        const user = await UserRepository.login({username, password})
        const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET,{expiresIn: '1h'})
        res.send({user}) 
    }catch(error){
        res.status(400).send(error.message)
    }
    
})

app.post('/register', async (req, res) =>{

    const {username, password} = req.body
    console.log(username, password)

    try{
        const id = await UserRepository.create({username, password})
        res.send({id})
    }catch(error){
        res.status(400).send(error.message)
    }

})

app.post('/logout', (req, res) =>{})
app.post('/protected', (req, res) =>{})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})





