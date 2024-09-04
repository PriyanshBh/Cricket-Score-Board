const express = require('express');
const { createMatch, addPlayersToMatch } = require('../controllers/matchController');
const {
  wideWithRuns,
  noBallWithBye,
  noBallWithRuns,
  legByeOrByeWithOverthrow,
  runsWithOverthrow,
} = require('../controllers/scoringController');

const router = express.Router();

router.post('/create', createMatch);
router.post('/add-players', addPlayersToMatch);
router.post('/wide-runs', wideWithRuns);
router.post('/no-ball-bye', noBallWithBye);
router.post('/no-ball-runs', noBallWithRuns);
router.post('/legbye-bye-overthrow', legByeOrByeWithOverthrow);
router.post('/runs-overthrow', runsWithOverthrow);

module.exports = router;
