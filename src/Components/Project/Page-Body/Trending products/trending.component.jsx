import '../Trending products/trending.component.css';
import pic1 from '../../../../Assests/Images/pic1.webp';
import pic2 from '../../../../Assests/Images/pic2.webp';
import pic3 from '../../../../Assests/Images/pic3.webp';
import pic4 from '../../../../Assests/Images/pic4.webp';
import pic5 from '../../../../Assests/Images/pic5.webp';
import pic6 from '../../../../Assests/Images/pic6.webp';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from '../../../../Services/product.service';
import { ArrowRepeat, Heart } from "react-bootstrap-icons";





export function TrendingProducts() {

    //create state varible for products
    const [trendingProducts, settrendingProducts] = useState([]);

    //use effect for api call
    useEffect(() => {
        getProducts().then((res) => {
            settrendingProducts(res.data);
        })
    }, []);



    return (
        <div style={{ marginTop: "30px" }}>
            <div class="container1">
                <div>
                    <h2 className='trending' ><b>Trending products</b></h2>
                </div>
                <div style={{ marginRight: "110px" }}>
                    <label>View All</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </div>

            <hr></hr>



            <div className='disply-flex1'  >
                {
                    trendingProducts && trendingProducts.map((item) =>

                        <div class="box-trending">
                            <div class="header-image1">

                                {
                                    item.productImage && <img src={item.productImage} alt="image" />
                                }
                                {
                                    !item.productImage && <img src={pic1} alt="image" />
                                }


                            </div>
                            <div className='offer-strip2'>{item.Discount}%off</div>
                            <div className="content-trending">
                                <h6>{item.ProductName}</h6>
                                <p><b className='price1'>{item.NewPrice}</b>&nbsp; <del>{item.OldPrice}</del></p>



                                <label>
                                    <form id={"addcart" + item.id} method='post' action='http://localhost:4002/addcart'>
                                        <input type='hidden' value={item.id} name='Productid'></input>

                                    </form>
                                    <a class="btn cart-button" onClick={() => { document.getElementById("addcart" + item.id).submit() }}>Add Cart</a>&nbsp;&nbsp;
                                </label>


                                <button className='bt cart-logs' style={{ marginRight: '5px' }}><ArrowRepeat /></button>
                                <label>
                                    <form id={"wishList" + item.id} method="post" action="http://localhost:4002/addWishList">
                                        <input type="hidden" value={item.id} name="productid" />
                                    </form>
                                    <button className="bt heart-icon" onClick={() => { document.getElementById("wishList" + item.id).submit() }}>
                                        <Heart />
                                    </button>
                                </label>

                            </div>
                        </div>


                    )
                }



            </div>




        </div>

    );
}