import { Schema } from 'mongoose';

export interface UserInterface {
    email: string;
    password: string;
    dateCreated: number;
    dateUpdated: number;
}

export const UserSchema = new Schema({
    email: String,
    password: String,
    dateCreated: Number,
    dateUpdated: Number,
});
