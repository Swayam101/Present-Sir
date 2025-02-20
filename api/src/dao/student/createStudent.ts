import models from "../../models";
import { IStudent } from "../../models/Student.model";

export default (student: IStudent) => {
  return models.StudentModel.create(student);
};
