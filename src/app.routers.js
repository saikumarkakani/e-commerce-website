import { Route, Routes } from "react-router-dom";
import { MyAbout } from "./Components/Project/Page-Body/About/about.component";
import { ProductList } from "./Components/Project/Page-Body/Product-List/productlist.component";
import { MyTerms } from "./Components/Project/Page-Body/Terms&Conditions/terms.component";

import { LoginPage } from "./Components/Project/Page-Body/signIn-LoginPage/login.component";
import { SignUpPage } from "./Components/Project/Page-Body/signIn-LoginPage/signin.component";
import { PrivacyPolicy } from "./Components/Project/Page-Body/Terms&Conditions/PrivacyPolicy/privacy.component";
import { MyBlogs } from "./Components/Project/Page-Body/blogs/blog.component";
import { BlogList } from "./Components/Project/Page-Body/blogs/blog-List/blogList.component";
import { Home } from "./Home/home.component";
import { Faq } from "./Components/Project/Page-Body/Terms&Conditions/faq/faq.component";
import { WishList } from "./Components/Project/Page-Body/WishList/whishlist.component";
import { Contact } from "./Components/Project/Page-Body/Contact/contact.component";
import { GridProduct } from "./Components/Project/Page-Body/Product-List/Grid-Product/gridProduct.component";
import { FullPage } from "./Components/Project/Page-Body/Product-List/FullPage/fullpage.component";
import { DashBoard } from "./Components/Project/Page-Body/DashBoard/dashboard.component";
import { AddCart } from "./Components/Project/Page-Body/WishList/addCart/addcart.component";
import { Tracking } from "./Components/Project/Page-Body/TrackOrder/tracking.component";
import { EditProfile } from "./Components/Project/Page-Body/signIn-LoginPage/editProfile/editprofile.component";
import { AddProducts } from "./Components/Project/Page-Body/Add-Products/add-products";





export function AppRoutes(){

    return(
        <Routes>
            
            
           <Route path="/" element={<Home></Home>} ></Route> 
           <Route path="/about" element={<MyAbout></MyAbout>} ></Route> 
           <Route path="/productList" element={<ProductList></ProductList>}></Route>
           <Route path="/productList" element={<ProductList></ProductList>}></Route>
            <Route path="/terms" element={<MyTerms></MyTerms>}></Route>
            <Route path="/Signin" element={<LoginPage></LoginPage>}></Route>
            <Route path="/Signup" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/privacy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
            <Route path="/blog" element={<MyBlogs></MyBlogs>}></Route>
            <Route path="/blogList" element={<BlogList></BlogList>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/wishlist" element={<WishList></WishList>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/gridProduct" element={<GridProduct></GridProduct>}></Route>
            <Route path="/FullPage" element={<FullPage></FullPage>}></Route>
            <Route path="/Dashboard" element={<DashBoard></DashBoard>}></Route>
            <Route path="/addcart"  element={<AddCart></AddCart>}></Route>
            <Route path="/tracking"  element={<Tracking></Tracking>}></Route>
            <Route path="/edit"  element={<EditProfile></EditProfile>}></Route>
            <Route path="/add-product"  element={<AddProducts></AddProducts>}></Route>


        </Routes>
    );
}