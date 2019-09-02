import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserController {

    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await UserModel.find({}, 'name email img role');
            res.json({
                status: true,
                users
            });   
        } catch (error) {
            res.json({
                status: false,
                message: error
            })
        }
    }

    async getIdUsers(req: Request, res: Response): Promise<void> {
        const users =  UserModel.find();
        res.json(users);
    }

    async saveUser(req: Request, res: Response): Promise<void>  {
        const user: User = req.body;
        const newUser: User = new UserModel({
            name: user.name,
            email: user.email,
            password: bcrypt.hashSync(user.password, 10),
            img: user.img,
            role: user.role
        });
        try {
            await newUser.save();
            res.status(200).json({status: true, user: newUser});
        } catch (error) {
            res.status(400).json({status: false, messsage: 'Error al guardar el usuario', error});
        }
    }
    
    async updateUser(req: Request, res: Response): Promise<void> {
        const idUser = req.params.id;
        const userRequest: User = req.body as User;
        const updateUser = {
            name: userRequest.name,
            email: userRequest.email,
            role: userRequest.role
        };
        console.log(updateUser);
        try {
            const user = await UserModel.findByIdAndUpdate(idUser, updateUser, { new: true });
            res.json({
                status: true,
                user
            })
        } catch (error) {
            res.json({
                status: false,
                message: 'Error al actualizar el usuario',
                error: error
            });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const idUser = req.params.id;
        try {
            const userDelete = await UserModel.findByIdAndRemove(idUser);
            if ( !userDelete ) {
                res.status(400).json({
                    ok: false,
                    message: 'No existe un usuario con ese id'
                });
            }
            res.status(200).json({
                status: true,
                user: userDelete
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Error al eliminar'
            })
        }
    }

}

export const userController = new UserController();