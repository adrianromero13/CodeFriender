const connection = require('../config/connection');
const ucbxQueries = require('../db/ucbxQueries');


module.exports = {
  getUsers: (req, res) => {
    connection.query(ucbxQueries.getUsers, (err, ucbxUsers) => {
      if (err) {
        throw err;
      }
      return res.json(ucbxUsers);
    });
  },
  insertUser: (req, res) => {
    const { title } = req.body;
    connection.query(ucbxQueries.insertUser, title, (insertErr) => {
      if (insertErr) {
        throw insertErr;
      }
      connection.query(ucbxQueries.getUsers, (err, ucbxUsers) => {
        if (err) {
          throw err;
        }
        return res.json(ucbxUsers);
      });
    });
  },
  deleteUserById: (req, res) => {
    const { ucbxUserId } = req.params;
    connection.query(ucbxQueries.deleteUserById, parseInt(ucbxUserId, 16), (err) => {
      if (err) {
        throw err;
      }
      return res.json({ success: true });
    });
  },
  getUsers: (req, res) => {
    const { ucbxUserId } = req.params;
    connection.query(ucbxQueries.getUsers, parseInt(ucbxUserId, 16), (err, ucbxUsers) => {
      if (err) {
        return res.json(err);
      }
      return res.json(ucbxUsers[0]);
    });
  },
  updateUser: (req, res) => {
    const { ucbxUserId } = req.params;
    const { title } = req.body;

    connection.query(ucbxQueries.updateUser, [title, ucbxUserId], (err) => {
      if (err) {
        throw new Error(err);
      }
      res.json({ success: true });
    });
  },
};
