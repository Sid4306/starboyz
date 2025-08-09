const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Atlas connected"))
  .catch(err => console.error(" MongoDB connection error:", err));


const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
