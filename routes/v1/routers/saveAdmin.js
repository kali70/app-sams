const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const AdminController = require('../controllers/adminController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await AdminController.getAdmins();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await AdminController.createAdmin(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.delete('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await AdminController.deleteAdmin(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });


};
