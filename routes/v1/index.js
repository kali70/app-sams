const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const registerTypesRouter = require('./routers/types');
const registerAllUsersRouter = require('./routers/users');


const typesRouter = promiseRouter();
apiRouter.use('/types', typesRouter);
registerTypesRouter(typesRouter);

const usersRouter = promiseRouter();
apiRouter.use('/users', usersRouter);
registerAllUsersRouter(usersRouter);

module.exports = apiRouter;
