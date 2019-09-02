import { Document } from 'mongoose';
interface Comic extends Document{
    name: String;
    url: String;
    user: String;
}

export default Comic;