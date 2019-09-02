import mongoose from 'mongoose';
import { Keys } from './keys';

export async function connect() {
    try {
        mongoose.set('useCreateIndex', true);
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        await mongoose.connect(Keys.dbUri);
        console.log('Conectado con la BD');
    }
    catch(e) {
        console.log(e)
    }
}