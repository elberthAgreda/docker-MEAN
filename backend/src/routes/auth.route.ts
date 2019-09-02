import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

class AuthRoute {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/', authController.login);
    }
}

export default new AuthRoute().router;