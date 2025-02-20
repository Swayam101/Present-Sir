import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

export interface IStudent {
  name: string;
  collegeID: string;
  address: string;
  class: ObjectId;
  password: string;
}

interface IModel extends Document {
  name: string;
  collegeID: string;
  address: string;
  class: ObjectId;
  password: string;
}

const studentSchema = new Schema<IModel>({
  name: {
    type: String,
    required: true,
  },
  collegeID: {
    type: String,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.classes,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model(Collections.students, studentSchema);
