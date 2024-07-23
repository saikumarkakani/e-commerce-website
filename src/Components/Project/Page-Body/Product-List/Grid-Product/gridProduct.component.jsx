import '../Grid-Product/gridProduct.component.css';

import React, { useEffect, useState } from 'react';
import pic1 from '../../../../../Assests/Images/pic3.webp';
import { getProducts } from '../../../../../Services/product.service';


export function GridProduct() {

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


                                    <div class="card product-box22" style={{position:'relative'}}>
                                        <div class="card-header">
                                            <img src={pic1} class="card-img-top" alt="image" className='product-image22' />
                                            <div className='productlist-strip'>{item.Discount}%off</div>
                                            <div className="wishlist-sub-menu">
                                                <i className='wishlist-li'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                                </svg></i>
                                                <i className='wishlist-li'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                    </svg>
                                                </i>
                                                <i className='wishlist-li'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crop" viewBox="0 0 16 16">
                                                        <path d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5m2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5" />
                                                    </svg>
                                                </i>
                                                <i className='wishlist-li'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                                    </svg>
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