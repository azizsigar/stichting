const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,registerUser,loginUser } = require("../controllers/authController");

// CORS ayarlarını belirli rotalar için tanımlayın
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000' // Kendi geliştirme sunucu adresinize göre güncelleyin
  })
);

router.get('/',test);
router.post('/register', registerUser);
router.post('/login', loginUser)

module.exports = router;
