import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    name: String
}, { collection: 'user' });

userSchema.methods.validPassword = function (pwd) {
    return (this.password === pwd);
};

const User = mongoose.model('user', userSchema);

export default User;
