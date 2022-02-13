import { Document, Model } from "mongoose";
export interface ITodo {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TodoDoc extends Document {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface todoModelInterface extends Model<TodoDoc> {}
