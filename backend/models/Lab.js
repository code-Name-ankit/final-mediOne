import mongoose from 'mongoose';

const labSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tests: [{ type: String }],
    price: { type: Number, required: true },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    }
});

labSchema.index({ location: "2dsphere" });

const Lab = mongoose.model('Lab', labSchema);
export default Lab;