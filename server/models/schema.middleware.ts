import * as mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
}, { collection: 'counters' });

const Counter = mongoose.model('counter', CounterSchema);

export function autoinc(next) {
    const collection = this;

    Counter.findByIdAndUpdate(
        { _id: 'orders' },
        { $inc: { seq: 1 } },
        (error, counter) => {
            if (error) { return next(error); }

            collection.id = counter.seq;
            next();
        });
}

export function setUpdatedAt() {
    this.update({}, { $set: { updatedAt: new Date() } });
}
