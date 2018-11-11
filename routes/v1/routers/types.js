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



// const express = require('express')
//
// const { Type, Users } = require('/../models/type')
//
// const router = express.Router()
//
// router.get('/', async (req, res) => {
//   const types = await Type.query()
//   res.json(types)
// })
//
// router.get('/:id', async (req, res) => {
//   const type = await Type.query().findById(req.params.id).eager('users')
//   res.json(type)
// })
//
// router.post('/', async (req, res) => {
//   const newType = req.body
//
//   const type = await Type.query()
//                          .allowInsert('[type]')
//                          .insertGraph(newType)
//
//   res.send(type)
// })
//
// router.post('/:id/users', async (req, res) => {
//   const type = await Type.query().findById(req.params.id)
//
//   await idea.$relatedQuery('users')
//             .allowInsert('[user, creator]')
//             .insert(req.body)
//
//   res.send(idea)
// })
//
// router.delete('/:id', async (req, res) => {
//   await Type.query().deleteById(req.params.id)
//
//   res.redirect('/types')
// })
//
// router.delete('/:id/users/:userId', async (req, res) => {
//   await User.query().deleteById(req.params.userId)
//
//   res.redirect(`/types/${req.params.id}`)
// })
//
// module.exports = router
