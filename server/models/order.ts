import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({}, { collection: 'order' });
const Order = mongoose.model('order', orderSchema);

class OrderRepoClass {
    constructor(private collection) { }

    findOne(req, args, fields) {
        switch (req.user) {
            case 'admin':
                break;
            case 'client':
                args.client_id = req.user.client_id;
                break;
            default:
                args.user_id = req.user.id;
                break;
        }

        return this.collection.findOne(args, fields).lean();
    }

    find(req, args, fields) {
        switch (req.user) {
            case 'admin':
                break;
            case 'client':
                args.client_id = req.user.client_id;
                break;
            default:
                args.user_id = req.user.id;
                break;
        }

        return this.collection.find(args, fields).lean();
    }
}

export const OrderRepo = new OrderRepoClass(Order);
