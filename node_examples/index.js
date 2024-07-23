//  let http = require("http");

// http.createServer((req,res)=>{
//     res.write("HI... Iam your API...:)");
//      res.end();
//    }).listen(4000);


//import express
let express = require('express');
//import db file
let db_con = require('./db_con');
//import cors
let cors = require('cors');
//import bodyparser
//let bodyParser = require('body-parser');
//import express-formidable
let formidable = require("express-formidable");



//create object
let app = express();
//use cors
app.use(cors());
//use body parser
//app.use(bodyParser.urlencoded({extended:false}));
//use formidable
app.use(formidable());



//add port
app.listen(4002);



//create get api for product details
app.get("/productsDetails", async (req, res) => {
    let data = await db_con.getProductsData();
    res.write(JSON.stringify(data));
    res.end();
});

//create Save api for product details
app.post("/saveProductDetails", async (req, res) => {
    let data = await db_con.saveProductDetailsData(req.fields.ProductName, req.fields.NewPrice, req.fields.OldPrice, req.fields.Discount, req.fields.StockAvalible, req.fields.productImage)
    //res.redirect("http://localhost:3000");
    res.write(JSON.stringify(data));
    res.end();
})




//get usersData
app.get("/usersData", async (req, res) => {

    let data = await db_con.getUsersData();
    res.write(JSON.stringify(data));
    res.end();
})


//create post api for userData
app.post("/saveUser", async (req, res) => {
    let data = await db_con.SaveUserData(req.fields.Name, req.fields.PhoneNumber, req.fields.Email, req.fields.Country, req.fields.Password);
    res.redirect("http://localhost:3000/Signup");
    // res.write(JSON.stringify(data));
    res.end();

});

//create post api for wishlist
app.post("/addWishList", async (req, res) => {
    let { productid } = req.fields;
    await db_con.addWishListData(productid);
    res.redirect("http://localhost:3000/wishlist");
    res.end();

});



//getwishlistData
app.get("/getWishList", async (req, res) => {
    let data = await db_con.getWishListData();
    res.write(JSON.stringify(data));
    res.end();
});

//addcart post api
app.post("/addcart", async (req, res) => {
    let { ProductiD } = req.fields;
    await db_con.addCart(ProductiD);
    res.redirect("http://localhost:3000/addcart");
    res.end();
});

//addcart get api

app.get("/getaddCart", async (req, res) => {
    let data = await db_con.addcartData();
    res.write(JSON.stringify(data));
    res.end();
});

//update user_data for post api

app.post("/updateUserData", async (req, res) => {
    let data = await db_con.userDataUpdate(req.fields.Name, req.fields.PhoneNumber, req.fields.Email, req.fields.Country, req.fields.Id);
    res.redirect("http://localhost:3000/Signin");
    res.end();
});

//delete wishlist post api

app.post("/deleteWishlistItem", async (req, res) => {
    let data = await db_con.DeletewishlistData(req.fields.id);
    res.end();
})

//delete Addcart Item post api
app.post("/deleteAddcartItem", async(req,res)=>{
    let data = await db_con.DeleteAddcartData(req.fields.Id);
    res.end();
})


//for search
app.post("/searchProducts", async (req, res) => {
    let data = await db_con.searchProductData(req.fields.ProductName);
    res.write(JSON.stringify(data))
    res.end();
})




