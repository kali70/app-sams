const Knex = require('knex');
const { Model } = require('objection');
const apiRouter = require('express').Router();
const connectionString = require('../knexfile')['development'].connection;

const db = 'sams';
const cache = {};
/* istanbul ignore next */
apiRouter.use((req, res, next) => {
    if (!cache[db]) {
        cache[db] = Knex({
            client: "pg",
            connection: connectionString
        });
    }
    Model.knex(cache[db]);
    next();
});
console.log("I am here");
apiRouter.use('/v1', require('./v1'));

module.exports = apiRouter;
