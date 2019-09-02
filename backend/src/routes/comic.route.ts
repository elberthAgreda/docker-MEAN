import { Router } from 'express';
import { comicController } from '../controllers/comic.controller';

class ComicRoute {

    public router: Router

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', comicController.getComics);
        this.router.post('/', comicController.saveComic);
        this.router.put('/:id', comicController.updateComic);
        this.router.delete('/:id', comicController.deleteComic);
    }

}

export default new ComicRoute().router;