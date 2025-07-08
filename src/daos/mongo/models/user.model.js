import { Schema, SchemaTypes, model } from "mongoose";

// nombre de la colección
const userCollection = "users";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  role: {
    type: String,
    default: "user"
  },
  orders: [
    {
      type: SchemaTypes.ObjectId,
      ref: "orders",
    },
  ],
});

const userModel = model(userCollection, userSchema);

export default userModel;
