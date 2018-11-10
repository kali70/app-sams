const Knex = require('knex');
const { Model } = require('objection');
const apiRouter = require('express').Router();
const connectionString = require('../knexfile')['development'].connection;
//const jwt = require('node-express-middleware').jwt;

const v1Routes = require('./v1');

//apiRouter.use(jwt);
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
apiRouter.use('/v1', v1Routes);

module.exports = apiRouter;
