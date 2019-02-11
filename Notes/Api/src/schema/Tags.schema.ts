import { Schema } from 'mongoose';

export interface TagsInterface {
    user: string;
    name: string;
    color: string;
    dateCreated: number;
    dateUpdated: number;
}

export const TagsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: String,
    color: String,
    dateCreated: Number,
    dateUpdated: Number,
});
