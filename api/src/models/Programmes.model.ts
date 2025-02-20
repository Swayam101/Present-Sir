import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

interface IProgrammes {
  name: string;
}

interface IModel extends Document {
  name: string;
}

const programmeSchema = new Schema<IModel>({
  name: String,
});

export default model(Collections.programmes, programmeSchema);
