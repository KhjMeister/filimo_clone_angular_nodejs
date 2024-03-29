const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('====================================');
        console.log(`Mongodb Connected : ${conn.connection.host}`);
        console.log('====================================');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB;