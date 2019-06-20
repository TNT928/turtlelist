const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TurtleSchema = new Schema({
    name:String,
    fee:String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    images: [{url:String, public_id:String}],
    author:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }

})

module.exports= mongoose.model('Turtle', TurtleSchema)