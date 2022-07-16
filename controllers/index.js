exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('products/list', { 
        title: 'Latest Ads',
        userName: req.user ? req.user.username : ''
    });
};