import { Schema, model } from "mongoose";

// nombre de la colección
const businessCollection = "business";

const businessSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    default: []
  }
})

const businessModel = model(businessCollection, businessSchema);

export default businessModel

