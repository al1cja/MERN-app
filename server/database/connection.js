const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

const mongodb = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uguqbsz.mongodb.net/mern-crud?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        mongoose.connect(mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to DB");
    } catch(error) {
        console.error(error);
    }
}

module.exports = connectDB;
