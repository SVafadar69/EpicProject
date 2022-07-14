// Import
let mongoose = require('mongoose');

// Create a model class
let productModel = mongoose.Schema(
    {
        category      :String,
        condition     :String,
        title         :String,
        description   :String,
        price         :Number,
        phoneNumber   :Number
        // ,
        // imageURL      :[{type:String}],  //------------> array of images
        // created_on    :{ type: Date },
        // updated_on    :{ type: Date, default: Date.now },
        // message: {
        //     question:[{type:String}], //-----------> array of questions
        //     answer:[{type:String}]    //-----------> array of answers
        // }    
    }, 
    // {
    //     strict: false
    // },     
    {
        collection: "usedProduct"
    });

module.exports = mongoose.model("Product", productModel);
