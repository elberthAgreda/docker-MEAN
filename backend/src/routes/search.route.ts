import { Router } from 'express';
import { searchController } from '../controllers/search.controller';

class SearchRoute {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/coleccion/:table/:term', searchController.searchCollection);
        this.router.get('/all/:term', searchController.search);
    }

}

export default new SearchRoute().router;