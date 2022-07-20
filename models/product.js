// Import
let mongoose = require('mongoose');

// Create a model class
let productModel = mongoose.Schema(
    {
        category      :String,
        condition     :String,
        title         :String,
        description   :String,
        price         :String,
        priceNum      :Number,//option entered if '$' selected
        phoneNumber   :Number
        //HAVE TO ADD IMAGES!!!
        //QUESTIONS
        //ANSWERS 
    }, 
    {
        collection: "usedProduct"
    });

module.exports = mongoose.model("Product", productModel);
