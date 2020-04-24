const router = require('express').Router();


const userRoutes = require('./userRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/todos
router.use('/ucbxUsers', userRoutes);


module.exports = router;
