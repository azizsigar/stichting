const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const{ mongoose} = require('mongoose');
const app = express();

// database
 mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true, // Gerekli
//   useUnifiedTopology: true, // Gerekli
})
.then(() => console.log("Database is connected"))
.catch((err) => console.log("DB err", err));

// middleware
app.use(express.json());
// app.use(cors())
app.use('/', require('./routes/authRoutes'));
const port = 8000;
// const port = process.env.PORT || 8000; // Port ayarı geliştirme ve yapılandırmaya bağlı olarak değişebilir
app.listen(port, () => console.log(`Server is running on port ${port}`));
