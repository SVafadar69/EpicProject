// create a reference to the model
let ProductModel = require('../models/product');

// Gets all products from the Database and renders the page to list them all.
module.exports.usedProducts = function(req, res, next) {  
    //outputs all the documents in the collection in an array
    //has two object - one for error(err) and the other for success(usedProduct)
    ProductModel.find((err, usedProducts) => {
        console.log(usedProducts);
        // if(err)
        // {
        //     return console.error(err);
        // }
        // else
        // {
        //     console.log(usedProducts);
        //     //send data from atlas db to the webpage
            
    
        // }
    });
}