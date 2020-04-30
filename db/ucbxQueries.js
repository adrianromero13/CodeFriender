const insertUser = 'INSERT INTO ucbxusers (first_name, last_name, strength, weakness, bio, email, github, badge) VALUES (?,?,?,?,?,?,?,?);';

const getUsers = 'SELECT * FROM ucbxUsers;';
const deleteUserById = 'DELETE FROM ucbxUsers WHERE id = ?;';
const getUserById = 'SELECT * FROM ucbxUsers WHERE id = ?;';
const updateUser = 'UPDATE ucbxUsers SET completed = true WHERE id = ?;';

module.exports = {
  insertUser,
  getUsers,
  deleteUserById,
  getUserById,
  updateUser,
};