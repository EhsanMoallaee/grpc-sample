const { default: mongoose } = require("mongoose");

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/grpc-sample')
.then(() => console.log('Mongodb connected successfully'))
.catch((err) => console.log('Mongodb connection error : ', err.message))