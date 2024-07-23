//import mysql2
let mysql = require('mysql2');

//create a connection
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sai@1234',
    database: 'safecart'
});

//create a function to start connection
function startConnection() {
    con.connect((err) => {
        if (err) throw err;
        console.log("connected")
    })
}

//get Products details
async function getProducts() {
    //start connection
    startConnection();
    //get data from db query
    let data = await con.promise().query('select *from productsDetails');
    return data[0];
}
//Save Products details in products with image
async function SaveProductDetails(ProductName, NewPrice, OldPrice, Discount , StockAvalible, productImage){
    startConnection();
    let data = await con.promise().query(`insert into productsdetails(ProductName, NewPrice, OldPrice, Discount , StockAvalible, productImage) values('${ProductName}', ${NewPrice}, ${OldPrice}, ${Discount} , ${StockAvalible},'${productImage}')`);
    return data[0];
}




//use connection
async function saveUser(Name, PhoneNumber, Email, Country, Password) {
   // start connection
    startConnection();
    let data = await con.promise().query(`insert into user_data(Name, PhoneNumber, Email, Country, Password) values('${Name}',${PhoneNumber},'${Email}','${Country}','${Password}') `);
   return data[0];

}


async function getUsers(){
    startConnection();
    let data = await con.promise().query("select *from user_data");
    return data [0];
}

//create a post api for wishlist
async function addWishList(productid) {
    // start connection
     startConnection();
     let data = await con.promise().query(`insert into wishlist(productid) values(${productid})`);
    return data[0];
 
 }

 //getWishlist get
 async function getWishList(){
    startConnection();
    let data = await con.promise().query("select p.id, w.id, ProductName, NewPrice, OldPrice, Discount , StockAvalible,p.productImage , w.quantity from productsDetails as p join wishlist as w on p.id = w.productid");
    return data [0];
}
 
//create a post api for addcart
async function addcart(ProductiD){
    startConnection();
    let data = await con.promise().query(`insert into addcart(ProductiD) values(${ProductiD})`);
    return data [0];
}

//create addcart get api 

async function getaddCart(){
    startConnection();
    let data = await con.promise().query("select p.id, a.Id, ProductName, NewPrice, OldPrice, Discount , StockAvalible,p.productImage , a.Quantity from productsDetails as p join addcart as a on p.id = a.ProductiD");
    return data [0];
    
}

//update user_date profile 

async function updateUserData(Name, PhoneNumber, Email, Country,Id) {
startConnection();
let data = await con.promise().query(`update  user_data set Name = '${Name}', PhoneNumber = ${PhoneNumber}, Email = '${Email}', Country= '${Country}' where Id =${Id}`);
return data [0];
}

//wishlist delete item post api
async function DeletewishlistItem(id){
    startConnection();
    let data = await con.promise().query(`delete from wishlist where id = ${id}`);
    return data[0];
}

//addcart delete post api
async function DeleteAddcartItem(Id){
    startConnection();
    let data = await con.promise().query(`delete from addcart where Id =${Id}`);
    return data [0];
}

//Search For Products 
//create a post api for addcart
async function searchProduct(ProductName){
    startConnection();
    let data = await con.promise().query(`select *from productsdetails where ProductName like '%${ProductName}%';`);
    return data [0];
}






//import above function
module.exports = {
    //for get product details
    getProductsData: async () => getProducts(),
    //for save product details
    saveProductDetailsData: async (ProductName, NewPrice, OldPrice, Discount , StockAvalible, productImage)=> SaveProductDetails(ProductName, NewPrice, OldPrice, Discount , StockAvalible, productImage),

//for save userData
  SaveUserData: async (Name, PhoneNumber, Email, Country, Password)=> saveUser(Name, PhoneNumber, Email, Country, Password),
  //for get user data
  getUsersData : async() => getUsers(),

//for save wishlist data
  addWishListData : async(productid) => addWishList(productid),
  //for get wishlist data
   getWishListData : async ()=> getWishList(),

   //for save addcart
   addCart : async (ProductiD)=> addcart(ProductiD),
   //for get addcart
   addcartData: async()=> getaddCart(),

   //for user_data update 
   userDataUpdate : async(Name, PhoneNumber, Email, Country,Id)=> updateUserData(Name, PhoneNumber, Email, Country,Id),
   //deletewishlist item
   DeletewishlistData : async(id) => DeletewishlistItem(id),
   //delete Addcart item
   DeleteAddcartData : async(Id)=>DeleteAddcartItem(Id),

   //Search 
   searchProductData: async(ProductName)=> searchProduct(ProductName)

}