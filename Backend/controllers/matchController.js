const Match = require('../models/Match');
const Player = require('../models/Player');
const Team = require('../models/Team');

// Create a match
const createMatch = async (req, res) => {
  const { team1, team2, overs } = req.body;
  try {
    const match = new Match({ team1, team2, overs, currentBattingTeam: team1 });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: 'Error creating match', error });
  }
};

// Add players to a match
const addPlayersToMatch = async (req, res) => {
  const { matchId, team1Players, team2Players } = req.body;
  try {
    const match = await Match.findById(matchId);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    
    match.players.team1 = team1Players;
    match.players.team2 = team2Players;
    await match.save();
    
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: 'Error adding players to match', error });
  }
};

module.exports = {
  createMatch,
  addPlayersToMatch
};
