const express = require("express");
const router = express.Router();
const {
  register,
  getUser,
  userDelete,
  getAllUsers,
} = require("../controllers/usercontroller");

router

  // ------------------Register---------------------//
  .post('/register', register)

  // ------------------Get user---------------------//
  .get('/user', getUser)
// ------------------Get all users---------------------//
  .get('/all', getAllUsers)
// ------------------delete user---------------------//
  .delete('/delete', userDelete)

  module.exports= router;