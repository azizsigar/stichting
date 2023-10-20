const User = require('../models/user');
const {hashPassword,comparePassword}= require('../helpers/auth')
const jwt =require('jsonwebtoken')


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
jwt.sign({email: email.user, id: user._id, name: user.name}, process.env.JWT_SECRET,{},(err,token)=>{
  if (err) throw err;
  res.cookie('token',token).json(user)
})
  ('password match')
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
const getProfile  = (req,res) =>{
const {token} = req.cookies;
if(token){
  jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
    if(err) throw err;
    res.json(user)
  })
}
else{
  res.json(null)
}
}
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};

