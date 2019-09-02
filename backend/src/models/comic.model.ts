import { Schema, model }  from 'mongoose';
import Comic from '../interfaces/comic.interface';

const comicSchema: Schema = new Schema({
    name: { type: String, required: [ true, 'El nombre es requerido' ] },
    url: { type: String, required: [ true, 'La url es requerida' ] },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { collection: 'comics' });

export default model<Comic>('Comic', comicSchema);