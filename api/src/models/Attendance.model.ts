import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { Collections } from "../types/enums";

export interface IAttendance {
  student: ObjectId;
  teacher: ObjectId;
  subject: ObjectId;
  class: ObjectId;
}

interface IModel extends Document {
  student: ObjectId;
  teacher: ObjectId;
  subject: ObjectId;
  class: ObjectId;
}

const attendanceSchema = new Schema<IModel>({
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.students,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.teachers,
  },
  subject: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collections.subjects,
  },
});

export default model(Collections.attendances, attendanceSchema);
