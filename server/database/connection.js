const mongoose = require("mongoose");

const mongodb = "mongodb+srv://admin:1t2e3s4t5@cluster0.uguqbsz.mongodb.net/mern-crud?retryWrites=true&w=majority"

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
