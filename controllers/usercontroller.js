const User = require('../models/User');

// -------------------Register-------------//

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
      // Save to  database
      const user = new User({
        firstname,
        lastname,
        email,
        password,
      });
      await user.save();
      console.log(user, "create user");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  };
  
  // -------------------Get user by id-------------//
  
  const getUser = async (req, res) => {
      const user = await User.findById(req.params.id);
      res.status(200).json({
        _id: user.id,
    
        email: user.email,
        name: user.name,
        lastname: user.lastname,
    
      });
      console.log(user, 'user back');
    };
 // -------------------update user-------------//

  const editUser = (req, res, next) => {
    let { user } = req;

    // You pick only allowed fields from submitted body
    const allowedFields = { firstName: req.body.firstName, lastName: req.body.lastName };

    // Override the current user data with new one
    user = Object.assign(user, allowedFields);

    user.save((err, savedUser) => {
        if (err) {
            return next(err);
        }
        res.json(savedUser.toJSON());
    });
};

    // -------------------Delete User-------------//

const userDelete = (req, res, next) => {
    User.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err);
      return res.send('Deleted successfully!');
    });
  };
  
  // -------------------Get all Users-------------//

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({});
      console.log(users);
      console.log('with success');
      res.json(users);
    } catch (err) {
      res.json({ err });
      console.log(err);
    }
  };


  module.exports = {
    register,
    getUser,
    userDelete,
    getAllUsers,
    editUser
  };
  
