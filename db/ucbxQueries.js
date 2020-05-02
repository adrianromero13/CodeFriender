const insertUser = 'INSERT INTO ucbxusers (first_name, last_name, strength, weakness, bio, email, github, badge) VALUES (?,?,?,?,?,?,?,?);';
const getUsers = 'SELECT * FROM ucbxUsers;';
const getUserByGithub = 'SELECT * FROM ucbxUsers WHERE github = ?;';
const deleteUserById = 'DELETE FROM ucbxUsers WHERE id = ?;';
const getUserById = 'SELECT * FROM ucbxUsers WHERE id = ?;';
const updateUser = 'UPDATE ucbxUsers SET completed = true WHERE id = ?;';
const getBestMatches = 'SELECT * FROM ucbxUsers WHERE strength = ? AND weakness = ?;';
const getMatchesForThem = 'SELECT * FROM ucbxUsers WHERE weakness = ?;';
const getMatchesForMe = 'SELECT * FROM ucbxUsers WHERE strength = ?;';

module.exports = {
  insertUser,
  getUsers,
  deleteUserById,
  getUserById,
  updateUser,
  getUserByGithub,
  getBestMatches,
  getMatchesForMe,
  getMatchesForThem,
};