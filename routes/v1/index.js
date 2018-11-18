const apiRouter = require('express').Router();
const promiseRouter = require('express-promise-router');
const registerTypesRouter = require('./routers/types');
const registerAllUsersRouter = require('./routers/users');
const registerAdminRouter = require('./routers/saveAdmin');



const typesRouter = promiseRouter();
apiRouter.use('/types', typesRouter);
registerTypesRouter(typesRouter);


// const typeUsersRouter = promiseRouter();
// apiRouter.use('/types_users', typeUsersRouter);
// registerTypesRouter(typeUsersRouter);

const usersRouter = promiseRouter();
apiRouter.use('/users', usersRouter);
registerAllUsersRouter(usersRouter);

const adminRouter = promiseRouter();
apiRouter.use('/admin', adminRouter);
registerAdminRouter(adminRouter);

module.exports = apiRouter;
