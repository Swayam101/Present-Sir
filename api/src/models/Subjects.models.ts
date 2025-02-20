import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

interface ISubjects {
  name: string;
  programme: ObjectId;
}

interface IModel extends Document {
  name: string;
  programme: ObjectId;
}

const subjectSchema = new Schema<IModel>({
  name: String,
  programme: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.subjects,
  },
});

export default model(Collections.subjects, subjectSchema);
