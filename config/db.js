const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // stop some warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } 
    
    catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDB ;
