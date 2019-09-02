import { Document } from 'mongoose';
interface User extends Document{
    name: string;
    email: string;
    password: string;
    img: string;
    role: string;
}

export default User;