import { Schema, model }  from 'mongoose';
import User from '../interfaces/user.interface';
import uniqueValidator from 'mongoose-unique-validator';

const rolValidate = {
    values: ['ADMIN_ROLES', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}

const userSchema: Schema = new Schema({
    name: { type: String, required: [ true, 'El nombre es requerido' ] },
    email: { type: String, unique:true, required: [ true, 'El correo es necesario' ] },
    password: { type: String, required: [ true, 'La contraseña es necesaria' ] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolValidate }
});

userSchema.plugin( uniqueValidator, { message: 'el campo {PATH} debe de ser unico'} );


export default model<User>('User', userSchema);