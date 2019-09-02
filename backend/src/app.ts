// Imports
import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
// Import Routes
import appRoutes from './routes/app.route';
import userRoutes from './routes/user.route';
import comicRoutes from './routes/comic.route';
import authRoutes from './routes/auth.route';
import searchRoutes from './routes/search.route';
import uploadRoutes from './routes/upload.route';

export class AppServer {

    public app: Application;
    public port: number | string;
    
    constructor( port: number | string ) {
      this.port = port || 3000;
      this.app = express();
      this.config();
      this.middlewares();
      this.routes();
    }

    config(): void {
      this.app.set('port', process.env.PORT || this.port);
    }

    middlewares(): void {
      this.app.use(cors());
      this.app.use(helmet());
      this.app.use(morgan('dev'));
      this.app.use(compression());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(express.json());
    }

    routes(): void {
      this.app.use('/comic', comicRoutes);
      this.app.use('/user', userRoutes);
      this.app.use('/login', authRoutes);
      this.app.use('/search', searchRoutes);
      this.app.use('/upload', uploadRoutes);
      this.app.use(appRoutes);
    }

    async listen(): Promise<void> {
      await this.app.listen(this.app.get('port'));
      console.log('Escuchando el puerto: ', this.app.get('port'));
    }

}