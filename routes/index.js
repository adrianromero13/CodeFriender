const router = require('express').Router();

// Getting / prepended to everything
// Hey I declared routes here.
const apiRoutes = require('./apiRoutes');
//localhost:3001
// This will prepend /api to anyroute declared within apiRoutes
router.use('/api', apiRoutes);

module.exports = router;
