import { Request, Response } from 'express';

class AppController {
        
    public test(req: Request, res: Response) {
        res.status(200).json({
            status: true,
            message: 'Petición correcta desde el contralador'
        });
    }
}

export const appController = new AppController();