const Player = require('../models/Player');

const addPlayer = async (req, res) => {
  const { name, isBowler, isBatsman } = req.body;
  try {
    const player = new Player({ name, isBowler, isBatsman });
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Error adding player', error });
  }
};

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching players', error });
  }
};

module.exports = {
  addPlayer,
  getPlayers
};
