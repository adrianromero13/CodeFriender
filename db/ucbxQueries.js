const insertUser = 'INSERT INTO ucbxUsers (first_name, last_name, strength, weakness, bio, email, github, badge) VALUES (?,?,?,?,?,?,?,?);';
const getUsers = 'SELECT * FROM ucbxUsers;';
const getBestMatches = 'SELECT * FROM ucbxUsers WHERE strength = ? AND weakness = ?;';
const getMatchesForThem = 'SELECT * FROM ucbxUsers WHERE weakness = ?;';
const getMatchesForMe = 'SELECT * FROM ucbxUsers WHERE strength = ?;';

module.exports = {
  insertUser,
  getUsers,
  getBestMatches,
  getMatchesForMe,
  getMatchesForThem,
};