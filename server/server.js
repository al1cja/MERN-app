const express = require("express");
const cors = require('cors')

const connectDB = require('./database/connection');
const router = require("./routes/router")

const app = express();
const port = 3030;

connectDB()

app.use(express.json());
app.use(cors())

app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})

app.use('', router)
