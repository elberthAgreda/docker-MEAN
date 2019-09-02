import { Router } from 'express';
import { appController } from '../controllers/app.controller';

class AppRoutes {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', appController.test);
    }

}

export default new AppRoutes().router;