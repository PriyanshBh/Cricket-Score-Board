const Match = require('../models/Match');

// Handle Wide deliveries with runs
const wideWithRuns = async (req, res) => {
  try {
    const { matchId, runs, team } = req.body;

    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    if (team === 'team1') {
      match.innings.inning1.score += runs;
      match.extras.team1.wides += 1;
      match.extras.team1.total += runs;
    } else {
      match.innings.inning2.score += runs;
      match.extras.team2.wides += 1;
      match.extras.team2.total += runs;
    }

    await match.save();
    res.status(200).json({ message: 'Wide runs added successfully', match });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle No-Ball with Bye runs
const noBallWithBye = async (req, res) => {
  try {
    const { matchId, byeRuns, team } = req.body;

    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    if (team === 'team1') {
      match.extras.team1.noBalls += 1;
      match.extras.team1.byes += byeRuns;
      match.extras.team1.total += byeRuns;
    } else {
      match.extras.team2.noBalls += 1;
      match.extras.team2.byes += byeRuns;
      match.extras.team2.total += byeRuns;
    }

    await match.save();
    res.status(200).json({ message: 'No-Ball with Bye runs added successfully', match });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle No-Ball with Runs
const noBallWithRuns = async (req, res) => {
  try {
    const { matchId, runs, team } = req.body;

    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    if (team === 'team1') {
      match.innings.inning1.score += runs;
      match.extras.team1.noBalls += 1;
      match.extras.team1.total += runs;
    } else {
      match.innings.inning2.score += runs;
      match.extras.team2.noBalls += 1;
      match.extras.team2.total += runs;
    }

    await match.save();
    res.status(200).json({ message: 'No-Ball with Runs added successfully', match });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle Leg Bye or Bye with Overthrow
const legByeOrByeWithOverthrow = async (req, res) => {
  try {
    const { matchId, legByeRuns, byeRuns, team } = req.body;

    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    if (team === 'team1') {
      match.extras.team1.legByes += legByeRuns;
      match.extras.team1.byes += byeRuns;
      match.extras.team1.total += legByeRuns + byeRuns;
    } else {
      match.extras.team2.legByes += legByeRuns;
      match.extras.team2.byes += byeRuns;
      match.extras.team2.total += legByeRuns + byeRuns;
    }

    await match.save();
    res.status(200).json({ message: 'Leg Bye or Bye with Overthrow added successfully', match });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle Runs with Overthrow
const runsWithOverthrow = async (req, res) => {
  try {
    const { matchId, runs, team } = req.body;

    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    if (team === 'team1') {
      match.innings.inning1.score += runs;
    } else {
      match.innings.inning2.score += runs;
    }

    await match.save();
    res.status(200).json({ message: 'Runs with Overthrow added successfully', match });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  wideWithRuns,
  noBallWithBye,
  noBallWithRuns,
  legByeOrByeWithOverthrow,
  runsWithOverthrow,
};
