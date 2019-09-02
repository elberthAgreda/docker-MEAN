import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import ComicModel from '../models/comic.model';
import Comic from '../interfaces/comic.interface';

class SearchController {

    constructor() { }

    async search(req: Request, res: Response) {
        const term = req.params.term;
        const regex = new RegExp( term, 'i');
        try {
            const users = await searchUser(regex);
            const comics = await searchComic(regex);
            res.status(200).json({ status: true, users, comics });
        } catch (error) {
            res.status(500).json({ status: false });
        }
    }

    async searchCollection(req: Request, res: Response) {
        const table = req.params.table;
        const term = req.params.term;
        const regex = new RegExp( term, 'i');
        let promiseSearch: Promise<any>;
        switch (table) {
            case 'comic':
                promiseSearch = searchComic(regex);
                break;
            case 'user':
                promiseSearch = searchUser(regex);
                break;
            default:
                return res.status(500).json({ status: false, message: 'error en la busqueda' });
        }
        promiseSearch.then( result => {
            res.status(200).json({
                status: true,
                [table]: result
            });
        });
    }

}

async function searchUser( regex: RegExp ): Promise<User[] | Error>{
    try {
       return await UserModel.find({}, 'name email').or([{ name: regex }, { email: regex }]);
    } catch (error) {
        return error
    }
}

async function searchComic( regex: RegExp ): Promise<Comic[] | Error>{
    try {
       return await ComicModel.find({ name: regex }, 'name url');
    } catch (error) {
        return error
    }
}

export const searchController = new SearchController();