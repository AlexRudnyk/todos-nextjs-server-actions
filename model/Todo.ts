import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    isCompleted: {
      type: "boolean",
      default: false,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
