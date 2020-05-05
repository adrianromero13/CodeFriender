const axios = require('axios');

const connection = require('../config/connection');
const ucbxQueries = require('../db/ucbxQueries');

module.exports = {
  getUsers: (req, res) => {
    connection.query(ucbxQueries.getUsers, (err, ucbxusers) => {
      if (err) {
        throw err;
      }
      return res.json(ucbxusers);
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
          // connection.query(ucbxQueries., req.body.github, (err, currentUser) => {
          //   if (err) {
          //     throw err;
          //   }
          //   return res.json(currentUser);
          // });
          return res.json({ success: true });
          // console.log(ucbxusers);
        });
    } catch (e) {
      console.log(e)
    }
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
