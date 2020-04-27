const router = require('express').Router();

//localhost:3001/api
const userRoutes = require('./userRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/ucbxUsers
router.use('/ucbxUsers', userRoutes);


module.exports = router;
