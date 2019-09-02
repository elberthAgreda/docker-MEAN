import { Router } from 'express';
import { uploadController } from '../controllers/upload.controller';
import multer from 'multer';
import path from 'path';
import uuid = require('uuid');

class UploadRoute {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        // assignmentname of image upload
        const storage = multer.diskStorage({
            destination: path.join(__dirname,'../../public/uploads'),
            filename: (req, file, cb) => {
                cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
            }
        });
        // assignment filters for images
        const upload = multer({
            storage,
            limits: { fieldSize: 2000000 },
            fileFilter: (req, file, cb) => {
                const fileTypes = /jpeg|jpg|png|gif/;
                const mimetype = fileTypes.test(file.mimetype);
                const extName = fileTypes.test(path.extname(file.originalname));
                if ( mimetype && extName ) {
                    return cb(null, true);
                }
                cb(null, false);
            }
        });
        this.router.put('/', upload.single('avatar') , uploadController.uploadFile);
    }

}

export default new UploadRoute().router;