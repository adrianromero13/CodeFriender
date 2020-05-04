const router = require('express').Router();

//localhost:3001/api
const userRoutes = require('./userRoutes');
// /api  prepended to every route declared in here



// declares a route for /api/ucbxusers
router.use('/ucbxusers', userRoutes);


module.exports = router;
