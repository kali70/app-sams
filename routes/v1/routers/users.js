const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const UserController = require('../controllers/userController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type", req);
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
      const result = await UserController.getAdminUser();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }

  });


  router.post('/admin', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await UserController.createAdminUser(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
