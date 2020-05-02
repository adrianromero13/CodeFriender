const insertUser = 'INSERT INTO ucbxusers (first_name, last_name, strength, weakness, bio, email, github, badge) VALUES (?,?,?,?,?,?,?,?);';

const getUsers = 'SELECT * FROM ucbxUsers;';
const getUserByStrength = 'SELECT * FROM ucbxUsers WHERE strength = ?;';
const getUserByWeakness = 'SELECT * FROM ucbxUsers WHERE weakness = ?;';
// // get user by github
// const getUserByGithub = 'SELECT * FROM ucbxUsers WHERE github = ?;';

const deleteUserById = 'DELETE FROM ucbxUsers WHERE id = ?;';
const getUserById = 'SELECT * FROM ucbxUsers WHERE id = ?;';
const updateUser = 'UPDATE ucbxUsers SET completed = true WHERE id = ?;';

module.exports = {
  insertUser,
  getUsers,
  deleteUserById,
  getUserById,
  updateUser,
  getUserByStrength,
  getUserByWeakness,
  // getUserByGithub,
};