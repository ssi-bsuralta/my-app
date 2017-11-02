import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({}, { collection: 'order' });
const Order = mongoose.model('order', orderSchema);

export default Order;
