import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({}, { collection: 'order' });

export const Order = mongoose.model('order', orderSchema);
