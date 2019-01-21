const Student = require('../repositories/studentRepository');
module.exports = class StudentController {
  static async getStudents() {
    const results =  await Student.getStudents()
    console.log("result", results);
   return results;
  }
  static async createStudent(student) {
    console.log("I am in the student controller");
    const result = await Student.createStudent(student);
    return result;
  }
};
