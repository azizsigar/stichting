const User = require('../models/user');
const {hashPassword,comparePassword}= require('../helpers/auth')

const test = (req, res) => {
  res.json('test is ok');
};
// register endpoint
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

const hashedPassword = await hashPassword(password)
    // create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {

console.log(error)
    //console.error(error);
    //res.status(500).json({ error: 'Internal server error' });
  }
};
// login endpoint

const loginUser = async(req,res)=>{
try {
  const{email,password }=req.body
  // check if user exist
  const user = await User.findOne({email})
if (!user) {
  return res.json({
    error: 'no user found'
  })
}
// check password match

const match =await comparePassword(password, user.password)
if (match) {
  res.json('password match')
}
if (!match) {
  res.json({
    error:"wrong password"
  })
}
} catch (error) {
  console.log(error)
}
}
module.exports = {
  test,
  registerUser,
  loginUser,
};
