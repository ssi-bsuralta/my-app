import * as mongoose from 'mongoose';
import { autoinc, setUpdatedAt } from './schema.middleware';

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    role: String,
    username: String
}, { collection: 'user' });

userSchema.pre('save', autoinc);
userSchema.pre('update', setUpdatedAt);

userSchema.methods.validPassword = (pwd) => {
    return (this.password === pwd);
};

export const User = mongoose.model('user', userSchema);
