const Type = require('../repositories/typeRepository');
module.exports = class typeController {
  static async getTypes() {
    console.log("I am type controller");
    const results =  await Type.getTypes()
    console.log("result", results);
    //
   return results;
  }
  static async getTypesAndUsers() {
    const results =  await Type.getTypesAndUsers()
    console.log("result", results);
    //
   return results;

  }

  static async createType(type) {
    console.log("I am in the controller");
    const result = await Type.createType(type);
    return result;
  }

};
