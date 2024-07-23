import '../Products/product.component.css';
import pic1 from '../../../../Assests/Images/pic1.webp';
import pic2 from '../../../../Assests/Images/pic2.webp';
import pic3 from '../../../../Assests/Images/pic3.webp';
import pic4 from '../../../../Assests/Images/pic4.webp';
import pic5 from '../../../../Assests/Images/pic5.webp';
import pic6 from '../../../../Assests/Images/pic6.webp';
import pic11 from '../../../../Assests/Images/pic11.webp';
import pic22 from '../../../../Assests/Images/pic22.webp';
import pic33 from '../../../../Assests/Images/pic33.webp';
import pic44 from '../../../../Assests/Images/pic44.webp';
import accept from '../../../../Assests/Images/accept.png';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from '../../../../Services/product.service';

import { ArrowRepeat, Heart } from "react-bootstrap-icons";
import { FaChevronRight } from "react-icons/fa6";
import Store from '../../../../Services/Storages/reduxstore.service';



export class MyProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            ProductItemDetails: [],
            showWishListmsg: false,
            showAddcartMsg: false

        }
    }

    //create state varible for products
    // const [ProductItemDetails, setProductItemDetails] = useState([]);
    // const [showWishListmsg, setshowWishListmsg] = useState(false);
    // const [showAddcartMsg, setshowAddcartMsg] = useState(false);


    //use effect for api call
    // useEffect(() => {
    //     getProducts().then((res) => {
    //         setProductItemDetails(res.data);
    //     })

    // }, [])
    componentDidMount() {
        this.getProductData();
        Store.subscribe(()=>{
            this.setState({ProductItemDetails: Store.getState()?.product});
        })
    }

    getProductData() {
        getProducts().then((res) => {
            this.setState({ ProductItemDetails: res.data })
        })

    }

    render() {

        return (
            <div className='ggap'>
                <div class="container">
                    <div>
                        <h2><b className='product-style'>Popular Products</b></h2>
                    </div>
                    <div style={{ marginLeft: "150px" }}>
                        <label style={{ margin: "10px" }}>View All</label>
                        <FaChevronRight />
                    </div>

                </div>

                <hr></hr>




                <div className='disply-flex'>
                    {
                        this.state.ProductItemDetails && this.state.ProductItemDetails.map((Item) =>
                            <div class="box-product ">
                                <div class="header-image">

                                    {
                                        Item.productImage && <img src={Item.productImage} alt="image" />
                                    }
                                    {
                                        !Item.productImage && <img src={pic2} alt="image" />
                                    }

                                </div>
                                <div className='offer-strip'>{Item.Discount}%off</div>

                                <div className="content-product">
                                    <h6>{Item.ProductName}</h6>
                                    <p><b className='price'>{Item.NewPrice}</b>&nbsp; <del>{Item.OldPrice}</del></p>
                                    <label>
                                        <form id={"addcart" + Item.id} method='post' action='http://localhost:4002/addcart'>
                                            <input type='hidden' value={Item.id} name='ProductiD'></input>

                                        </form>
                                        <a href="#" class="btn cart-button" onClick={() => { document.getElementById("addcart" + Item.id).submit(); this.setState({ showAddcartMsg: true }) }}>Add Cart</a>&nbsp;&nbsp;
                                    </label>

                                    <button className='bt cart-logs'><ArrowRepeat /></button>&nbsp;
                                    <label>
                                        <form id={"wishList" + Item.id} method="post" action="http://localhost:4002/addWishList" >
                                            <input type="hidden" value={Item.id} name="productid" />
                                        </form>
                                        <button className="bt heart-icon" onClick={() => { document.getElementById("wishList" + Item.id).submit(); this.setState({ showWishListmsg: true }) }} >
                                            <Heart />
                                        </button>
                                    </label>

                                </div>
                            </div>


                        )
                    }


                </div>
                {

                    this.state.showWishListmsg && <div className='wishlist-popup'>
                        <label>
                            <img src={accept} className='accept-img'></img>
                            Add to Wishlist
                        </label>
                    </div>
                }

                {

                    this.state.showAddcartMsg && <div className='wishlist-popup'>
                        <label>
                            <img src={accept} className='accept-img'></img>
                            Add to Add Cart
                        </label>
                    </div>


                }




            </div>

        );
    }

}