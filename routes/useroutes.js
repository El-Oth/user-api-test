const express = require("express");
const router = express.Router();
const {
  register,
  getUser,
  getAllUsers,
  editUser,
  userDelete,
} = require("../controllers/usercontroller");

router

  // ------------------Register---------------------//
  .post('/register', register)

  // ------------------Get user---------------------//
  .get('/user', getUser)
// ------------------Get all users---------------------//
  .get('/all', getAllUsers)
// ------------------update user---------------------//
.put('/edit', editUser)
// ------------------delete user---------------------//
  .delete('/delete', userDelete)

  module.exports= router;
