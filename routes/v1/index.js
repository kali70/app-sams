const apiRouter = require('express').Router();
const { timezone } = require('node-express-middleware');
const promiseRouter = require('express-promise-router');
const registerAuthRouter = require('./routers/authentication');

/**
 * Provides the CRUD functionality for authentication Management
 *
 */
const authRouter = promiseRouter();
apiRouter.use('/authentication', authRouter);
registerAuthRouter(authRouter);
