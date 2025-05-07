import dbLocal from 'db-local';
const { Schema } = new dbLocal({ path: "./databases" });
import crypto from 'crypto';

const User = Schema("User", {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
  });
  

export class UserRepository{
    static create({username, password}){
        if(typeof username !== 'string'){
            throw new Error('El nombre de usuario debe ser una cadena de texto')
        }
        if(typeof username.length < 3){
            throw new Error('El nombre de usuario debe tener al menos 3 caracteres')
        }
        if(typeof password !== 'string'){
            throw new Error('La contraseña debe ser una cadena de texto')
        }
        if(typeof password.length < 6){
            throw new Error('La contraseña debe tener al menos 8 caracteres')
        }
        const user = User.findOne({_id: username}); 
        if (user){
            throw new Error('El nombre de usuario ya está en uso')
        }

        const id = crypto.randomUUID();

        User.create({_id: id, username, password}).save()
        return id
    }
    
    static login({username, password}){

    }
}
