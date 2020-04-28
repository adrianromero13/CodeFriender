const router = require('express').Router();

const dbController = require('../../../controllers/dbController');
//localhost:3001/api/ucbxUsers
// /api/todos prepended to every route
router.route('/')
  .get(dbController.getUsers)
  .post(dbController.insertUser);


router.route('/:userId')
  .delete(dbController.deleteUserById)
  .get(dbController.getUserById)
  .patch(dbController.updateUser);



// when you want to update more than 1 property in an object

// PATCH  when you only want to update 1 property in an object
// router.get('/', (req, res) => {
//     connection.query(todoQueries.getTodos, (err, todos) => {
//         res.json(todos);
//     });
// });

// router.post('/', (req, res) => {
//     const { title } = req.body;

//     connection.query(todoQueries.insertTodo, title, (err, responseFromDb) => {
//         // This needs to be done on a DELETE REQUEST, UPDATE REQUEST, OR A POST REQUEST
//         connection.query(todoQueries.getTodos, (err, todos) => {
//             res.json(todos);
//         });
//     });
// });

module.exports = router;
