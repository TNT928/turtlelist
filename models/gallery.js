const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
    name:String,
    rehomingFee:String,
    description: String,
    images: [String],
    owner:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }

})

module.exports= mongoose.model('Turtle', turtleSchema)