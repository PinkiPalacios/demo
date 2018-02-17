var express = require('express');
var router = express.Router();
var products = require('../products')
var Products = require('../models/Products')
console.log(products)
/* GET home page. */
router.get('/', function(req, res) {
  Products.find({}, function (err, list) {
    console.log(list)
    res.render('homePage', {cuco:list});
    
  })
});


router.get('/product/:id', function (req, res ) {
  Products.findById( req.params.id, function (err, data) {
    console.log(err, data)
    res.render('shopItem', data)
  })
  // //////
  // name = products[req.params.id].name
  // price = products[req.params.id].price
  // img = products[req.params.id].img
  // res.render('shopItem', {name, price, img, index:req.params.id}) ///// { name, price, img }
})

router.get('/product/modify/:id', function (req, res) {
  Products.findById(req.params.id, function (err, data) {
    res.render('form', {
      method: "POST",
      action: "/form/modify/" + req.params.id,
      message: "Modify " + data.name,
      namePH: data.name,
      pricePH: data.price,
      imgPH: data.img,
      a: "",
      b: "",
      c: "",
    })
  })
})

router.post('/form/modify/:id', function (req, res) {
  Products.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    res.redirect('/product/' + req.params.id)
  } )
  // products[req.params.id] = req.body  
  // res.redirect('/product/' + req.params.id)
})



router.get('/form', function (req, res) {
  res.render('form', {
    method:"POST",
    message:"Create new product",
    action: "/form",
    namePH: "",
    pricePH: "",
    imgPH: "",
    a:"Name",
    b:"Price",
    c:"Image",
  })
})



router.post('/form' , function (req, res) {
  Products.create(req.body , function (error, data) {
    res.redirect('/')
  })
  // products.unshift(req.body) 
  // res.redirect('/') 

})

router.get('/products/delete/:id', function (req, res) {

})

router.get('/products/delete/:id', function (req, res) {
  products.splice(req.params.id, 1)
  res.redirect('/')
})

module.exports = router;
