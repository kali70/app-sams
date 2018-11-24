const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const RegionsListController = require('../controllers/regionsListController');


module.exports = async (router) => {
  router.get('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await RegionsListController.getRegionsList();
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

  router.post('/', async (req, res, next) => {
    console.log("I am type");
    try {
      const result = await RegionsListController.createRegion(req.body);
      res.status(200).json(result);
    } catch (err) {
      throw err;
    }
  });

};
