import { Schema } from 'mongoose';

export interface NotesInterface {
    user: string;
    tag: string;
    text: string;
    dateCreated: number;
    dateUpdated: number;
}

export const NotesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    tag: {
        type: Schema.Types.ObjectId,
        ref: 'Tags',
    },
    text: String,
    dateCreated: Number,
    dateUpdated: Number,
});
