import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

interface ITeachers extends Document {
  name: string;
  username: string;
  address: string;
  phone: string;
  password: string;
  email: string;
}

const teacherSchema = new Schema<ITeachers>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

export default model(Collections.teachers, teacherSchema);
