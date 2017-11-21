import * as mongoose from 'mongoose';

export function setMongoose(myExpress) {
    mongoose.connect('mongodb://localhost/ssi', { useMongoClient: true });
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
}
