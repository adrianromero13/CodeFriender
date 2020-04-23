const router = require('express').Router();


const todoRoutes = require('./userRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/todos
router.use("/ucbxUsers", userRoutes);


module.exports = router;
