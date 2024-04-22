import { Document, Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface Order extends Document {
  clerkId: string;
  email: string;
  tel: string;
  coffe: string;
  adress: string;
  author: string;
  orderDate: Date;
}

const OrderSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tel: {
    type: String,
    required: true,
  },
  coffe: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
});

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
