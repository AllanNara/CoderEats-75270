import { Schema, SchemaTypes, model } from "mongoose";

// nombre de la colección
const orderCollection = "orders";

const orderSchema = new Schema({
  number: {
    type: Number,
    unique: true
  },
  products: [],
  totalPrice: Number,
  status: String,
  business: {
    type: SchemaTypes.ObjectId,
    ref: "business"
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "users"
  }
})

const orderModel = model(orderCollection, orderSchema);

export default orderModel

