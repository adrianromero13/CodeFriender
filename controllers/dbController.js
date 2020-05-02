const axios = require('axios');

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

  insertUser: async (req, res) => {
    console.log('he shoots...he scores!!!!');
    try {
      let gitData = await axios.get(`https://api.github.com/users/${req.body.github}`)
      console.log(gitData);

      let userValues = [req.body.firstName,
      req.body.lastName,
      req.body.strength,
      req.body.weakness,
      req.body.bio,
      req.body.email,
      req.body.github,
      gitData.data.avatar_url];

      console.log(userValues);

      connection.query(ucbxQueries.insertUser,
        [...userValues], (insertErr) => {
          if (insertErr) {
            throw insertErr;
          }
          connection.query(ucbxQueries.getUserByGithub, req.body.github, (err, currentUser) => {
            if (err) {
              throw err;
            }
            return res.json(currentUser);
          });
          // console.log(ucbxUsers);
        });
    } catch (e) {
      console.log(e)
    }
  },

  getUserByStrength: (req, res) => {
    const { ucbxUserStrength } = req.params;
    connection.query(ucbxQueries.getUserByStrength, ucbxUserStrength, (err) => {
      if (err) {
        throw err;
      };
      return res.json({ success: true });
    });
  },

  getUserByWeakness: (req, res) => {
    const { ucbxUserWeakness } = req.params;
    connection.query(ucbxQueries.getUserByWeakness, ucbxUserWeakness, (err) => {
      if (err) {
        throw err;
      };
      return res.json({ success: true });
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

  getUserByGithub: (req, res) => {
    console.log("Get by Github", req.params.id)
    const { ucbxCurrentUser } = req.params.id;
    connection.query(ucbxQueries.getUserByGithub, ucbxCurrentUser, (err, result) => {
      if (err) {
        console.log("Error", err)
        throw err;
      }
      console.log(result)
      return res.json(result);
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

  getBestMatches: (req, res) => {
    console.log(req.body)
    const { currentUser } = req.body;
    connection.query(ucbxQueries.getBestMatches, [currentUser.weakness, currentUser.strength], (err, bestMatches) => {
      if (err) throw err;
      res.json(bestMatches)
    });
  },

  getMatchesForThem: (req, res) => {
    console.log(req.body)
    const { currentUser } = req.body;
    connection.query(ucbxQueries.getMatchesForThem, [currentUser.strength], (err, matchesForThem) => {
      if (err) throw err;
      res.json(matchesForThem)
    });
  },

  getMatchesForMe: (req, res) => {
    console.log(req.body)
    const { currentUser } = req.body;
    connection.query(ucbxQueries.getMatchesForMe, [currentUser.weakness], (err, matchesForMe) => {
      if (err) throw err;
      res.json(matchesForMe)
    });
  },
};
