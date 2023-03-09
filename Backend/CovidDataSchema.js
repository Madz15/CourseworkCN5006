let mongoose= require('mongoose')
const CovidDataScheme= new mongoose.Schema({
 Date: String,
 County: String,
 State: String,
 Cases: Number,
 Deaths: Number
 })
 module.exports= mongoose.model('CovidDataModel',CovidDataScheme,'CovidCollection');