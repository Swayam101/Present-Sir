// 3rd party packages
import bcrypt from "bcrypt";

// custom files
import dao from "../../dao";
import { IStudent } from "../../models/Student.model";

// utils
import utils from "../../utils";
const { asyncWrapper, jsonResponse } = utils;

const registerStudent = asyncWrapper<IStudent>(async (req, res, next) => {
  const { name, collegeID, address, class: studentClass, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 3);
  const data = await dao.student.createStudent({
    name,
    collegeID,
    address,
    class: studentClass,
    password: hashedPassword,
  });
  const { password: _userPassword, ...student } = data;
  jsonResponse<Omit<IStudent, "password">>(res, {
    status: "success",
    statusCode: 201,
    title: "admin operation",
    message: "student registered successfully!",
    data: student,
  });
});

export default registerStudent;
