const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const StudentController = require('../controllers/student');


module.exports = async (router) => {
  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await StudentController.createStudent(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
