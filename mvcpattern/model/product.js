const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        maxLength: 100,
    }
}, { timestamps: true });


const product = mongoose.model('product', productSchema);

module.exports = product;