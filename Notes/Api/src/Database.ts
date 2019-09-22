import * as Mongoose from 'mongoose';
import { mongoUrl } from './Config';

import { UserInterface, UserSchema } from './schema/User.schema';
import { TagsInterface, TagsSchema } from './schema/Tags.schema';
import { NotesInterface, NotesSchema } from './schema/Notes.schema';

console.log(`Mongo URL ${mongoUrl}\n`.green.bold);
Mongoose.connect(mongoUrl, { useNewUrlParser: true });

export const User = Mongoose.model('User', UserSchema);
export const Tags = Mongoose.model('Tags', TagsSchema);
export const Notes = Mongoose.model('Notes', NotesSchema);

export {
    UserInterface,
    TagsInterface,
    NotesInterface,
};
