const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const registerTypesRouter = require('./routers/types');
const registerAllUsersRouter = require('./routers/users');
const registerSigninRouter = require('./routers/singin');
const registerRegionsListRouter = require('./routers/regions_list');
const registerRegionsRouter = require('./routers/regions');
const registerStudentsRouter = require('./routers/students');


const typesRouter = promiseRouter();
apiRouter.use('/types', typesRouter);
registerTypesRouter(typesRouter);

const usersRouter = promiseRouter();
apiRouter.use('/users', usersRouter);
registerAllUsersRouter(usersRouter);

const signinRouter = promiseRouter();
apiRouter.use('/login', signinRouter);
registerSigninRouter(signinRouter);

const regionsListRouter = promiseRouter();
apiRouter.use('/regions_list', regionsListRouter);
registerRegionsListRouter(regionsListRouter);

const regionsRouter = promiseRouter();
apiRouter.use('/regions', regionsRouter);
registerRegionsRouter(regionsRouter);
const studentsRouter = promiseRouter();
apiRouter.use('/students', studentsRouter);
registerStudentsRouter(studentsRouter);

module.exports = apiRouter;
