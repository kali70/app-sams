const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const AuthController = require('../controllers/authentication');


module.exports = async (router) => {
  router.post('/', async (req, res, next) => {
    try {
      console.log('reg: ', req.body);
      const result = await AuthController.AuthAdminByEmail(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });
};
