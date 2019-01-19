const Student = require('../models/student');

module.exports = class StudentRepository {
  static async getStudents() {
    try {
      const results = await Student.query();
      console.log("Model: ", results);
      return results;
    }catch (err) {
      console.log("ERR::", err);
      throw err;
    }
  }
  static async createStudent(student) {
    try {
        const newSudent = await Student.query().insert(student).returning('*');
        return newSudent
    } catch (err) {
        console.log(err);
        throw err;
    }
  }
};
