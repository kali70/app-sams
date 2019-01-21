const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const RegionsController = require('../controllers/regionsController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await RegionsController.getRegion();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.get('/:id', async (req, res, next) => {
    console.log("I am type: ", req);
    try {
      const result = await RegionsController.getRegionByID(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await RegionsController.createRegion(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
