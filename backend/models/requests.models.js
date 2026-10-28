import mongoose from "mongoose";
const RequestsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium"
  },
  resolved: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })
export const Requests = new mongoose.model("Requests", RequestsSchema)