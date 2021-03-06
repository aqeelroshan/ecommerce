var express = require('express');
var productHelpers=require('../helpers/product-helpers')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  productHelpers.getAllProducts().then((products)=>{
    console.log(products);

    res.render('user/view-products',{admin:true,products});
  })
});

module.exports = router;
