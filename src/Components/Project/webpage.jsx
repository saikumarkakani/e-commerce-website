
import React, { useEffect, useRef, useState } from "react";
import '../Project/webpage.css';
import projectlogo from '../../Assests/Images/project-logo.webp';
import { Link, useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { BsRepeat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BsJustify } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsPersonWheelchair } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Store from "../../Services/Storages/reduxstore.service";
import { useContext } from "react";
import { UserContextVariable } from "../../Services/userContext";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

export function WebPage() {

//for search Products
const searchProducts = useRef();

    //for left side menu popup
    const [openPopup, setopenPopup] = useState(false);

    //for user logged
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
 
    const navigate = useNavigate();

    //for createContextVariable
    const user = useContext(UserContextVariable);
    useEffect(()=>{
        if(user){
            setisUserLoggedIn(true);

        }
        else{
            setisUserLoggedIn(false);
        }
    },[user])


    //for left side menu popup
    const ShowPopup = () => {
        setopenPopup(!openPopup);
    };

    function userLogOut(){
        let action = {type: "login", data: null};
        Store.dispatch(action);
        alert("Logout Succesfully...")
        navigate("/");
    }

//for searching Products
async function searchProductData(){
    let formData = new FormData();
    // formData.append("ProductName", searchProducts.current.value);
    formData.append("ProductName", searchProducts.current.value);

    const config ={
        headers: {"context-Type" : "multipart/form-data"}
    }
    const res = await axios.post("http://localhost:4002/searchProducts", formData,config);

     Store.dispatch({type:"product", data:res.data});

}


    return (
        <div>
            <header>
                <div className="head">
                    <ul className="ul-style">
                        <li className="li-styles"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg></li>
                        <li className="li-styles"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></li>
                        <li className="li-styles"><BsPersonWheelchair style={{ height: "26", width: "23" }} /></li>

                        <li className="li-styles"> <GrInstagram style={{ height: "26", width: "23" }} /> </li>

                        <label className="label-style"></label>
                        <label className="become-seller-style"> Become a Seller </label>
                        <li className="list-items">Seller login</li>
                        <li className="list-items">FAQ</li>
                        <li className="list-items">Contact</li>
                        <li className="list-items">Tracking order</li>
                    </ul>
                </div>
                <div>

                    <Link to='/'> <label className="log-style">
                        <img src={projectlogo} style={{ width: '190px', height: '50px' }}></img>
                    </label></Link>


                    <label>
                        <input type="search" placeholder="Search For Products" className="search-bar"  ref={searchProducts}>
                        </input>
                        <button className="search-button">

                        <IoSearchOutline style={{ width: '26px', height: '36px' }} onClick={()=>{searchProductData()}} />

                        </button>
                    </label>
                    <label className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <Link to="/tracking" style={{ textDecoration: 'none', color: 'black' }}><label>Tracking order</label> </Link>
                    </label>
                </div>

            </header>
            <hr></hr>

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">

                            <ul className="ul1">
                                <BsJustify style={{ height: "26", width: "23" }} />
                                <li className="items" onClick={ShowPopup}>Categories<label></label>&nbsp;&nbsp;&nbsp; |</li>

                                {openPopup && (
                                    <div className=" Categories-popup">

                                        <div className="popup-content">
                                            <ImCross style={{ marginLeft: "320px" }} onClick={ShowPopup} />
                                            <h2>Popup Content</h2>
                                            <p>This is your popup content.</p>

                                        </div>
                                    </div>
                                )}

                                <li className="items">Home Page
                                    <ul className="sub-menu1">
                                        <li className="li1">Home Style 01</li>
                                        <li className="li1">Home Style 02</li>
                                        <li className="li1">Home Style 03</li>
                                    </ul>

                                    <GoChevronDown /></li>
                                <Link to='/about'><li className="items">About</li></Link>
                                <li className="items">Shop Page
                                    <ul className="sub-menu1">
                                        <Link to="/productList" style={{ textDecoration: 'none' }}><li className="li1" >Product List</li></Link>
                                        <Link to='/gridProduct' style={{ textDecoration: 'none' }}><li className="li1">Grid Product</li></Link>
                                        <Link to='/FullPage' style={{ textDecoration: 'none' }}><li className="li1">Full Shop Page</li></Link>
                                    </ul>
                                    <GoChevronDown /></li>
                                <li className="items">Pages
                                    <ul className="sub-menu1">
                                        <Link to="/terms" style={{ textDecoration: 'none' }}><li className="li1">Terms & Conditions</li> </Link>
                                        <Link to="/privacy" style={{ textDecoration: 'none' }}> <li className="li1">Privacy Policy</li></Link>
                                        <Link to="/faq" style={{ textDecoration: 'none' }}><li className="li1">FAQ</li></Link>
                                    </ul>

                                    <GoChevronDown /></li>
                                <li className="items">Blog
                                    <ul className="sub-menu1" style={{ height: '80px' }}>
                                        <Link to="/blog" style={{ textDecoration: 'none' }}> <li className="li1">Blog Grid Style</li></Link>
                                        <Link to="/blogList" style={{ textDecoration: 'none' }}>  <li className="li1">Blog List</li></Link>


                                    </ul>

                                    <GoChevronDown /></li>
                                <Link to="/contact"><li className="items">Contact</li></Link>
                                <Link to="/add-product"><li className="items">Add Product</li></Link>
                                <label className="logs">

                                    <Link to='/wishlist' style={{ textDecoration: 'none', color: 'black' }}>
                                        <IoMdHeartEmpty style={{ height: "25", width: "25" }} /></Link>&nbsp;&nbsp;

                                    <Link to="/addcart" style={{ textDecoration: 'none', color: 'black' }}> <BsCart2 style={{ height: "26", width: "23" }} /></Link> &nbsp;&nbsp;

                                    <BsRepeat style={{ height: "26", width: "23" }} />&nbsp;&nbsp;

                                    <IoPersonOutline style={{ height: "26", width: "23" }} />
                                    
                                    {
                                        isUserLoggedIn == false &&
                                        <li className="items">Login/Register
                                            <ul className="sub-menu1" style={{ height: '80px' }}>
                                                <Link to="/Signin" style={{ textDecoration: 'none', color: 'black' }}> <li className="li1">Sign IN</li></Link>
                                                <Link to="/Signup" style={{ textDecoration: 'none', color: 'black' }}>    <li className="li1" >Sign UP</li></Link>
                                            </ul>
                                        </li>

                                    }


                                    {
                                        isUserLoggedIn == true &&

                                        <li className="items">Login/Register
                                            <ul className="sub-menu1" style={{ height: '80px' }}>
                                                <Link to="/edit" style={{ textDecoration: 'none', color: 'black' }}>    <li className="li1" >Edit Profile</li></Link>
                                                   <li className="li1" onClick={()=>{userLogOut()}}>Log Out</li>
                                            </ul>
                                        </li>
                                    }


                                </label>

                            </ul>



                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );


}

