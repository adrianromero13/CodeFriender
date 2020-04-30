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
    console.log('he shoots...he scores!!!!');

    connection.query(ucbxQueries.insertUser,
      [req.body.firstName,
        req.body.lastName,
        req.body.strength,
        req.body.weakness,
        req.body.bio,
        req.body.email,
        req.body.github] , (insertErr) => {
      if (insertErr) {
        throw insertErr;
      }
      connection.query(ucbxQueries.getUsers, (err, ucbxUsers) => {
        if (err) {
          throw err;
        }
        return res.json(ucbxUsers);
      });
      // console.log(ucbxUsers);
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
  getUserById: (req, res) => {
    const { ucbxUserId } = req.params;
    connection.query(ucbxQueries.getUserById, parseInt(ucbxUserId, 16), (err) => {
      if (err) {
        throw err;
      }
      return res.json({ success: true });
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
