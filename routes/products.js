var express = require('express');
var router = express.Router();

let productController = require('../controllers/product');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in  <------------------------------------
    if(!req.isAuthenticated()){
        req.session.url=req.originalUrl;//copy the originalUrl to the session, so you can redirect the user back after a successful authentication
        return res.redirect('/users/signin');//redirect the user to the '/users/sign' page
    }
    next();  
}


// ----------------------------------------------------------------
// ADD HERE --> Regisered user can CREATE, EDIT, DELETE ads 
// ----------------------------------------------------------------


module.exports = router;