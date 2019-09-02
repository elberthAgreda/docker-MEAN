import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { Keys } from '../config/keys';

class Authentication {

    async checkToken(req: Request, res: Response, next: NextFunction) {
        const token = req.query.token;
        try {
            await verify(token, Keys.SEED);
        } catch (error) {
            res.status(401).json({ status: false,  message: 'Token invalido' });
        }
        next();
    }

}

export const authentication = new Authentication();