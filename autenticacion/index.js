import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import { UserRepository } from './user-repository.js'
import { JWT_SECRET } from './config.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next)=>{
    const token = req.cookies.my_cookie
    //console.log(token)
        
    req.session = {user:null}

    try{
        const data = jwt.verify(token, JWT_SECRET)
        console.log(data)
        req.session.user = data

    }catch(error){
        req.session.user = null
    }
    
    next()
})


app.get('/', (req, res) => {
    console.log(req.session)
    const {user} = req.session
    console.log(user)

    res.render('login', user)
   
    
    /*const token = req.cookies.my_cookie

    if(!token){
        return res.render('login')
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        const {username, ...body1} = decoded
        
        console.log(username)
        res.render('login', {username:username})

    }catch(error){
        res.render('login')
    }*/
    
})


app.post('/login', async (req, res)=>{
    const {username, password} = req.body
    console.log(username, password)
    try{
        const user = await UserRepository.login({username, password})
        const token = jwt.sign({id: user._id, username: user.username}, JWT_SECRET,{expiresIn: '1h'})
        res.cookie('my_cookie', token, 
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000 // 1 hour in milliseconds
        }
        ).send({user, token}) 
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

app.post('/logout', (req, res) =>{
    res.clearCookie('my_cookie').json({message:'logout successful'})
})

app.get('/protected', (req, res) => {
    const {user} = req.session

    if(!user){
        return res.status(403).send('Access not authorized')
    }

    res.render('protected', user)
    
    /*const token = req.cookies.my_cookie
    const decoded = jwt.verify(token, JWT_SECRET)
    const {username, ...body1} = decoded
   
    console.log(username)

    if(!token){
            return res.status(403).send('Access not authorized')
   }
    res.render('protected',{username:username})*/
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})





