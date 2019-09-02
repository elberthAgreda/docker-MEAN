import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Keys } from '../config/keys';
import User from '../interfaces/user.interface';

class AuthController {

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        //Check if username and password are set
        if ( !(email && password) ) {
            res.status(400).json({status: false, messsage: 'Error en el envio de datos'});
        }
        //Get user from database
        let user: User;
        try {
            user = await UserModel.findOne({ email }) as User;
            if ( !bcrypt.compareSync(password, user.password) ){
                return res.status(400).json({
                    ok: false,
                    messsage: 'Credenciales incorrectas - contraseña',
                });
            }
            const token = sign({ user: user.email }, Keys.SEED, { expiresIn: 14000 });
            res.status(200).json({token});
        } catch (error) {
            res.status(400).json({status: false, messsage: 'No se encontro el usuario'});
        }
    }
}

export const authController = new AuthController();