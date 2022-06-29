const express = require("express");

const connectDB = require('./database/connection');

const app = express();
const port = 3030;


connectDB()
app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})
