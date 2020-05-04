const router = require('express').Router();

const dbController = require('../../../controllers/dbController');
//localhost:3001/api/ucbxusers
// /api/ucbxusers prepended to every route
router.route('/')
  .get(dbController.getUsers)
  .post(dbController.insertUser);

router.route('/bestmatches')
  .post(dbController.getBestMatches);

router.route('/matchesforthem')
  .post(dbController.getMatchesForThem);

router.route('/matchesforme')
  .post(dbController.getMatchesForMe);

module.exports = router;
