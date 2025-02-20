import { ObjectId } from "mongodb";
import { Document, Schema, model } from "mongoose";
import { Collections } from "../types/enums";

interface IClass {
  teacher: ObjectId;
  year: 1 | 2 | 3 | 4 | 5;
  programme: ObjectId;
  branch: ObjectId;
}

interface IModel extends Document {
  teacher: ObjectId;
  year: 1 | 2 | 3 | 4 | 5;
  programme: ObjectId;
  branch: ObjectId;
}

const classSchema = new Schema<IModel>({
  teacher: {
    type: Schema.Types.ObjectId,
    ref: Collections.classes,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  programme: {
    type: Schema.Types.ObjectId,
    ref: Collections.programmes,
    required: true,
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: Collections.branches,
    required: true,
  },
});

export default model(Collections.classes, classSchema);
