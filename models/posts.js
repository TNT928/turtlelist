const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TurtleSchema = new Schema({
    name:String,
    fee:String,
    description: String,
    images: [String],
    author:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }

})

module.exports= mongoose.model('Turtle', TurtleSchema)