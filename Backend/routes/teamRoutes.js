const express = require('express');
const { addTeam, getTeams } = require('../controllers/teamController');

const router = express.Router();

router.post('/add', addTeam);
router.get('/', getTeams);

module.exports = router;
