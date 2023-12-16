import { Document } from "mongoose";

export interface TodoProps extends Document {
  _id: string;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
