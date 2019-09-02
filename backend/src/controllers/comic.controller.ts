import { Request, Response } from 'express';
import ComicModel from '../models/comic.model';
import Comic from '../interfaces/comic.interface';

class ComicController {

    // Lazy load get comics
    async getComics(req: Request, res: Response): Promise<void> {
        try {
            let ofPag = req.query.first || 0;
            ofPag = Number(ofPag);
            const comics = await ComicModel.find()
                                            .skip(ofPag)
                                            .limit(5)
                                            .populate('user', 'name email');
            const count = await ComicModel.count({})
            res.status(200).json({ status: true, comics, total: count});
        } catch (error) {
            res.status(400).json({
                status: false,
                error
            });
        }    
    }

    async saveComic(req: Request, res: Response): Promise<void> {
        try {
            const comic: Comic = req.body;
            const newComic: Comic = new ComicModel({
                name: comic.name,
                url: comic.url,
                user: comic.user
            });
            try {
                await newComic.save();
                res.status(200).json({status: true, comic: newComic});
            } catch (error) {
                res.status(400).json({status: false, messsage: 'Error al guardar el usuario', error});
            }
        } catch (error) {
            
        }
    }
    
    async updateComic(req: Request, res: Response): Promise<void> {
        const idComic = req.params.id;
        const comicRequest: Comic = req.body as Comic;
        const updateComic: Comic = new ComicModel({
            name: comicRequest.name,
            url: comicRequest.url,
            user: comicRequest.user
        });
        try {
            const comic = await ComicModel.findByIdAndUpdate(idComic, updateComic, { new: true });
            res.status(200).json({
                status: true,
                comic
            })
        } catch (error) {
            res.status(400).json({
                status: false,
                message: 'Error al actualizar el comic',
                error: error
            });
        }
    }

    async deleteComic(req: Request, res: Response): Promise<void> {
        const idComic = req.params.id;
        try {
            const comicDelete = await ComicModel.findByIdAndRemove(idComic);
            if ( !comicDelete ) {
                res.status(400).json({
                    ok: false,
                    message: 'No existe un comic con ese id'
                });
            }
            res.status(200).json({
                status: true,
                comic: comicDelete
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: 'Error al eliminar el comic'
            })
        }
    }
}

export const comicController = new ComicController();