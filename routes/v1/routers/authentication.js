const { timezone } = require('node-express-middleware');
const { promisify } = require('util');
const authController = require('../controllers/authController');
//const validate = require('express-validation');
//const inputValidation = require('../schemas/vehicles.schema');

module.exports = async (router) => {
    router.get('/', async () => {
        try {
            const result = await authController.getAdmins();
            logger.info('Returning admins:', result.results);
            if (result.results.length !== 0) {
                result.results[0].full_count = result.total;
            }
            res.locals.results = result.results;
            next();
        } catch (err) {
            throw err;
        }
    });
};
