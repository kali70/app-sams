const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const registerTypesRouter = require('./routers/types');
const registerAllUsersRouter = require('./routers/users');
const registerSigninRouter = require('./routers/singin');



const typesRouter = promiseRouter();
apiRouter.use('/types', typesRouter);
registerTypesRouter(typesRouter);

const usersRouter = promiseRouter();
apiRouter.use('/users', usersRouter);
registerAllUsersRouter(usersRouter);

const signinRouter = promiseRouter();
apiRouter.use('/login', signinRouter);
registerSigninRouter(signinRouter);

module.exports = apiRouter;
