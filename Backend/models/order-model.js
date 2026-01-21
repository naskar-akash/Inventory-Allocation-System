import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'confirmed',
    },
});

export default model("Order", orderSchema);