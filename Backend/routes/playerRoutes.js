const express = require('express');
const { addPlayer, getPlayers } = require('../controllers/playerController');

const router = express.Router();

router.post('/add', addPlayer);
router.get('/', getPlayers);

module.exports = router;
