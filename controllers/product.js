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

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = ProductModel();

    res.render('products/add_edit', {
        title: '',
        product: newItem
    })        
}

// Processes the data submitted from the Add form
module.exports.processAddPage = (req, res, next) => {

    //REQUEST
    let newItem = ProductModel({
        _id: req.body.id,
        category: req.body.category,
        condition: req.body.condition,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        priceNum: req.body.priceNum,
        phoneNumber: req.body.phoneNumber
    });

    //RESPOND
    ProductModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //CAN ADD if --> in case item already exists...
            console.log(item);
            res.redirect('/products/add');
        }
    });

}
