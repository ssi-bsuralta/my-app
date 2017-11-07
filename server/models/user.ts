import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    name: String
}, { collection: 'user' });

userSchema.methods.validPassword = function (pwd) {
    return (this.password === pwd);
};

export const User = mongoose.model('user', userSchema);
