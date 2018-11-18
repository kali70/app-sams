const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const UserController = require('../controllers/userController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await UserController.getUsers();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.get('/admin', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await UserController.getAdminUsers();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });


  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await UserController.createUser(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
