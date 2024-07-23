import '../Product-List/productlist.component.css';

import React, { useEffect, useState } from 'react';

import pic1 from '../../../../Assests/Images/pic1.webp';
import pic2 from '../../../../Assests/Images/pic2.webp';
import pic3 from '../../../../Assests/Images/pic3.webp';
import pic4 from '../../../../Assests/Images/pic4.webp';
import pic5 from '../../../../Assests/Images/pic5.webp';
import pic6 from '../../../../Assests/Images/pic6.webp';
import pics1 from '../../../../Assests/Images/pic11.webp';
import pics2 from '../../../../Assests/Images/pic22.webp';
import pics3 from '../../../../Assests/Images/pic33.webp';
import pics4 from '../../../../Assests/Images/pic44.webp';
import pics5 from '../../../../Assests/Images/tshirt.png';
import pics6 from '../../../../Assests/Images/pic33.webp';
import pics7 from '../../../../Assests/Images/pic44.webp';
import pics8 from '../../../../Assests/Images/pic22.webp';
import { Button } from 'bootstrap';

import { getProducts } from '../../../../Services/product.service';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiCrop } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export function ProductList() {

    function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.classList.toggle("show");
    }
    //create state varible for products
    const [productList, setproductList] = useState([]);
    //use effect for api call
    useEffect(() => {
        getProducts().then((res) => {
            setproductList(res.data);
        })
    })



    return (
        <div>
            
            <div className='about-color'>
                <h1 className='about'>Products</h1>
                <div className='about-small'>Shop Page</div>
            </div>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="container22">
                            <div style={{marginLeft:"40px"}}>
                                <label className='pro-icon-box'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                </svg></label>&nbsp;&nbsp;&nbsp;
                                <label className='pro-icon-box1'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="22" fill="currentColor" class="bi bi-border-all" viewBox="0 0 16 16">
                                    <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
                                </svg></label>

                                <label className='pro-gap'>Showing 1-10 of 32 results</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <div class="dropdown">
                                    <button class="btn dropdown-toggle dropdown-border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Order By Desc
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Order By Desc</a></li>
                                        <li><a class="dropdown-item" href="#">Order By ASC</a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <br></br>
                        <br></br>



                        <div className='disply-flex22'>
                            {
                                productList && productList.map((item) =>


                                    <div class="card product-box22" style={{ position: 'relative' }}>
                                        <div class="card-header">
                                            <img src={pic1} class="card-img-top" alt="image" className='product-image22' />
                                            <div className='productlist-strip'>{item.Discount}%off</div>
                                            <div className="wishlist-sub-menu">
                                                <i className='wishlist-li'><IoBagOutline /></i>
                                                <i className='wishlist-li'>
                                                    <label>
                                                        <form id={"wishList" + item.id} method="post" action="http://localhost:4002/addWishList">
                                                            <input type="hidden" value={item.id} name="productid" />
                                                        </form><IoMdHeartEmpty onClick={()=>{document.getElementById("wishList" + item.id).submit()}}  />
                                                    </label>

                                                </i>
                                                <i className='wishlist-li'>
                                                    <CiCrop />
                                                </i>
                                                <i className='wishlist-li'>
                                                    <FaEye />
                                                </i>


                                            </div>

                                        </div>
                                        <br></br>
                                        <div className='offer-strip2'>{item.Discount}%off</div>
                                        <div class="card-body">
                                            <h6 class="card-title">{item.ProductName}</h6>
                                            <br></br>
                                            <p className='stock'>Stock Available{item.StockAvalible}</p>

                                            <p class="card-text"><b className='price22'>{item.NewPrice}</b>&nbsp; <del>{item.OldPrice}</del></p>
                                        </div>
                                    </div>

                                )

                            }
                            {/*                             
                            <div class="card product-box22 boxs-gap4">
                                <div class="card-header">
                                    <img src={pics2} class="card-img-top" alt="image" className='product-image22' />
                                </div>
                                <br></br>
                                <div class="card-body">
                                    <h6 class="card-title">Dior</h6>
                                    <br></br>
                                    <p className='stock'>Stock Available(989)</p>
                                    <p class="card-text"><b className='price22'>$258.40</b>&nbsp; <del>$340.00</del></p>
                                    <br></br>

                                </div>
                            </div> */}

                       

                        </div>


                    </div>
                    <div class="col-4">

                        <div class="dropdown-container">
                            <div class="dropdown">
                                <input type='checkbox' id="dropdown-toggle" class="dropdown-toggle" />
                                <label for="dropdown-toggle" class="dropdown-btn"><b>Category</b></label>

                                <ul class="dropdown-content">
                                    <li><a href="#" className='atag-style'>Electronics</a></li>
                                    <li><a href="#" className='atag-style'>Fashion</a></li>
                                    <li><a href="#" className='atag-style'>Home & Livings</a></li>
                                    <li><a href="#" className='atag-style'>Garden & Outdoors</a></li>
                                    <li><a href="#" className='atag-style'>Personal Care & Beauty </a></li>
                                    <li><a href="#" className='atag-style'>Kids & Babies</a></li>
                                    <li><a href="#" className='atag-style'>Music & Instruments</a></li>
                                    <li><a href="#" className='atag-style'>Automotives & Vehicles</a></li>
                                    <li><a href="#" className='atag-style'>Arts & Crafts</a></li>
                                    <li><a href="#" className='atag-style'>Fashion</a></li>
                                    <li><a href="#" className='atag-style'>Home & Livings</a></li>
                                </ul>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div class="dropdown">
                            <input type='checkbox' id="dropdown-toggle-2" class="dropdown-toggle" />
                            <label for="dropdown-toggle-2" class="dropdown-btn"><b>Price</b></label>
                            <ul class="dropdown-content">
                                <input type='range' ></input>&nbsp; $5000
                            </ul>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>



                        <div class="dropdown">
                            <input type='checkbox' id="dropdown-toggle-3" class="dropdown-toggle" />
                            <label for="dropdown-toggle-3" class="dropdown-btn"><b>Color</b></label>
                            <ul class="dropdown-content">

                                <div id="colorButtons">
                                    <input type='color' className='color-box'></input>
                                    <button class="color-option color-box" style={{ backgroundColor: 'green' }}></button>
                                    <button class="color-option color-box" style={{ backgroundColor: 'Pink' }}></button>
                                    <button class="color-option color-box" style={{ backgroundColor: ' #e67737' }}></button>
                                    <button class="color-option color-box" style={{ backgroundColor: ' #f52922' }}></button>
                                    <button class="color-option color-box" style={{ backgroundColor: 'orange' }}></button>
                                </div>
                            </ul>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


                        <div class="dropdown">
                            <input type='checkbox' id="dropdown-toggle-4" class="dropdown-toggle" />
                            <label for="dropdown-toggle-4" class="dropdown-btn"><b>Size</b></label>
                            <ul class="dropdown-content">
                                <label className='size'>
                                    <input type='checkbox' ></input>&nbsp; UK 6#<br></br>
                                    <input type='checkbox' ></input>&nbsp; UK 7#<br></br>
                                    <input type='checkbox' ></input>&nbsp; UK 8#<br></br>
                                    <input type='checkbox' ></input>&nbsp; UK 9#<br></br>
                                    <input type='checkbox' ></input>&nbsp; UK 10#<br></br>
                                </label><br></br>
                                <label className='apply-box'>
                                    <input type='button' value='Apply' className='btn apply'></input>
                                </label>

                            </ul>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


                        <div class="dropdown">
                            <input type='checkbox' id="dropdown-toggle-5" class="dropdown-toggle" />
                            <label for="dropdown-toggle-5" class="dropdown-btn"><b>Filter By Rating</b></label>
                            <ul class="dropdown-content">
                                <div class="star-rating">

                                    <input type='checkbox'></input>   <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <div class="star-rating">

                                    <input type='checkbox'></input> <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star half">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                </div>
                                <div class="star-rating">

                                    <input type='checkbox'></input> <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                </div>
                                <div class="star-rating">

                                    <input type='checkbox'></input> <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                </div>
                                <div class="star-rating">

                                    <input type='checkbox'></input>  <span class="star">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                    <span class="star empty">&#9733;</span>
                                </div>
                            </ul>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div class="dropdown">
                            <input type='checkbox' id="dropdown-toggle-6" class="dropdown-toggle" />
                            <label for="dropdown-toggle-6" class="dropdown-btn"><b>Brands</b></label>
                            <ul class="dropdown-content">
                                <li>APPLE</li>
                                <li>MI</li>
                                <li>OnePlues</li>
                                <li>oppo</li>
                                <li></li>
                            </ul>

                        </div>





                    </div>
                </div>
            </div>
            <div className='numbers-gap'>
                <ul class="page-numbers">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>

                </ul>
            </div>


        </div>
    );
}