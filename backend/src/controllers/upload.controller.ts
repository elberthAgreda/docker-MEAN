import { Request, Response } from 'express';

class UploadController {

    uploadFile(req: Request, res: Response) {
        if ( !req.file ) {
            return res.status(400).json({status:false, message: 'No tiene adjunto valido'});
        }
        res.status(200).json({status: true});
    }
}

export const uploadController = new UploadController();