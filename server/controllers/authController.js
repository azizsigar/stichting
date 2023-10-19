const User = require('../models/user');

const test = (req, res) => {
  res.json('test is ok');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name is entered
    if (!name) {
      return res.json({
        error: 'Name is required',
      });
    }
    // Check if the password is at least 6 characters long
    if (!password || password.length < 6) {
      return res.json({
        error: 'Password should be at least 6 characters long',
      });
    }
    // Check if email is correct
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: 'Email is already taken',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {

console.log(error)
    //console.error(error);
    //res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  test,
  registerUser,
};
