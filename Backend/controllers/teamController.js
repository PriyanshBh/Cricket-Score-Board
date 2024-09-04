const Team = require('../models/Team');

const addTeam = async (req, res) => {
  const { name, players } = req.body;
  try {
    const team = new Team({ name, players });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Error adding team', error });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('players');
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teams', error });
  }
};

module.exports = {
  addTeam,
  getTeams
};
