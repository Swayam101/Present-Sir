import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

interface IBranches extends Document {
  name: string;
  programme: ObjectId;
}

interface IModel extends Document {
  name: string;
  programme: ObjectId;
}

const branchesSchema = new Schema<IModel>({
  name: { type: String, required: true },
  programme: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.branches,
  },
});

export default model(Collections.branches, branchesSchema);
