const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const courseSchema = mongoose.Schema({
    image: String,
    name: String,
    code:String,
    credit:Number,
    Type:String,
    Description:String
})




module.exports = mongoose.model("course",courseSchema);                       