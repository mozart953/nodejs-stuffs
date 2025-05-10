import dbLocal from 'db-local';
const { Schema } = new dbLocal({ path: "./databases" });
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import {SALT_ROUNDS} from './config.js'

//const SALT_ROUNDS = 10;



const Session = Schema("Session", {
    _id: { type: String, required: true },
    user: { type: String, required: true },
    expires: { type: Date, required: true }
});


const User = Schema("User", {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
  });
  





export class UserRepository{
    static async create({username, password}){

        Validation.validateUsername(username)
        Validation.validatePassword(password)
        
        const user = User.findOne({_id: username}); 
        if (user){
            throw new Error('El nombre de usuario ya está en uso')
        }

        const id = crypto.randomUUID();

        User.create({
            _id: id, 
            username,
            password: await bcrypt.hash(password, SALT_ROUNDS)}).save()
            
        return id
    }
    
    static async login({username, password}){
        Validation.validateUsername(username)
        Validation.validatePassword(password)

        const user = User.findOne({username: username})
        if(!user){
            throw new Error('El nombre de usuario no existe')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            throw new Error('La contraseña es incorrecta')
        }

        const {password: _, ...userWithoutPassword} = user
        
        return userWithoutPassword
        
    }
}

class Validation{
    static validateUsername(username){
        if(typeof username !== 'string'){
            throw new Error('El nombre de usuario debe ser una cadena de texto')
        }
        if(typeof username.length < 3){
            throw new Error('El nombre de usuario debe tener al menos 3 caracteres')
        }

    }

    static validatePassword(password){
        if(typeof password !== 'string'){
            throw new Error('La contraseña debe ser una cadena de texto')
        }
        if(typeof password.length < 6){
            throw new Error('La contraseña debe tener al menos 8 caracteres')
        }
    }
}