const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const TypeController = require('../controllers/typeController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await TypeController.getTypes();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await TypeController.createType(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
