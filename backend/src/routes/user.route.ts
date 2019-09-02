import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { authentication } from '../middlewares/authentication';

class UserRoute {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', userController.getUsers);
        this.router.post('/', authentication.checkToken, userController.saveUser);
        this.router.put('/:id', authentication.checkToken, userController.updateUser);
        this.router.delete('/:id', authentication.checkToken, userController.deleteUser);
    }
}

export default new UserRoute().router;