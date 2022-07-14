// Import
let mongoose = require('mongoose');

// Create a model class
let productModel = mongoose.Schema(
    {
        category      :{type:String},
        condition     :{type:String},
        title         :{type:String},
        description   :{type:String},
        price         :{type:Number},
        phoneNumber   :{type:Number},
        imageURL      :[{type:String}],  //------------> array of images
        created_on    :{ type: Date },
        updated_on    :{ type: Date, default: Date.now },
        message: {
            question:[{type:String}], //-----------> array of questions
            answer:[{type:String}]    //-----------> array of answers
        }    
    }, 
    {
        strict: false
    },     
    {
        collection: "products"
    });

module.exports = mongoose.model("Product", productModel);
