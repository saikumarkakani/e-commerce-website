
import './whishlist.component.css';
import { MyFooter } from '../../Page-Footer/footer.component';
import { WebPage } from '../../webpage';
import tshirt1 from '../../../../Assests/Images/tshirt.png';
import { useEffect, useState } from 'react';

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { getWishlistData } from '../../../../Services/wishlist.service';
import ModalPopup from '../Shared-Components/modalpopup';
import { DeletePopup } from './Delete-Popup/deletePopup';
import axios from 'axios';




export function WishList() {

    const [wishlistData, setwishlistData] = useState([]);

    const [PageSize, setPageSize] = useState(3);
    const [PageNumber, setPageNumber] = useState([]);
    const [TotalWishListItem, setTotalWishList] = useState([]);
    const [showdeletePopup, setshowdeletePopup] = useState(false);
    const [deleteWishListId, setdeleteWishListId] = useState(0);




    useEffect(() => {
        getWishlistData().then((res) => {
            setTotalWishList(res.data);
            let pNumbers = Math.ceil(res.data.length / PageSize);
            let pNumberArrays = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumberArrays.push(i)
            }
            setPageNumber(pNumberArrays);
            let data = res.data.slice(0, PageSize);

            setwishlistData(data);
        })
    }, [])


    function gotoPage(num) {
        let startIndex = PageSize * (num - 1);
        let endIndex = PageSize * num;
        let res = TotalWishListItem.slice(startIndex, endIndex);
        setwishlistData(res);
    }



    //for increment
    function increment(item, index) {
        

        let data = JSON.parse(JSON.stringify(wishlistData));
        data[index].quantity = item.quantity + 1;
        setwishlistData(data);

    }
    //for decrement
    function decrement(item, index) {
        if (item.quantity > 0) {
            let data = JSON.parse(JSON.stringify(wishlistData));
            data[index].quantity = item.quantity - 1;
            setwishlistData(data);
        }
    }

    async function deletewishlistProduct() {
        if (deleteWishListId > 0) {
            const config = {
                headers: { "content-Type": "multipart/form-data" }
            };
            const newForm = new FormData();
            newForm.append("id", deleteWishListId);
            const res = await axios.post("http://localhost:4002/deleteWishlistItem", newForm, config);
            window.location.reload();
        };
    };







    return (
        <div>

            <div className='about-color'>
                <h1 className='about'>Wishlist Page</h1>
            </div>
            <br></br>
            <br></br>
            <div className='whishlist-body '>


                <div id="table-container">

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#f2f2f2', padding: '20px', color: '#888686' }}>Product Name</th>
                                <th style={{ backgroundColor: '#f2f2f2', padding: '20px', color: '#888686' }}>Unite Price</th>
                                <th style={{ backgroundColor: '#f2f2f2', padding: '20px', color: '#888686' }}>Quantity</th>
                                <th style={{ backgroundColor: '#f2f2f2', padding: '20px', color: '#888686' }}>Total Price</th>
                                <th style={{ backgroundColor: '#f2f2f2', padding: '20px', color: '#888686' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                wishlistData && wishlistData.map((item, index) =>

                                    <tr>
                                        <td>

                                            {
                                                item.productImage && <img src={item.productImage} alt="image" className='wishlist-img' />
                                            }
                                            {
                                                !item.productImage && <img src={tshirt1} alt="image" className='wishlist-img' />
                                            }


                                            <label style={{ bottom: '10px' }}></label>
                                            <label style={{ fontSize: '18px' }} className='wishlist-text'><b>
                                                {item.ProductName}
                                            </b>
                                            </label>

                                        </td>
                                        <td style={{ fontSize: '19px' }}><label className='data-text'></label>
                                            ${item.OldPrice}
                                        </td>
                                        <td ><label className='data-text'></label>
                                            <div style={{ border: '1px solid #ccc', padding: '6px', borderRadius: '2px', display: 'inline-block', width: '120px' }}>
                                                <label onClick={() => { decrement(item, index) }}>
                                                    <FaMinus />
                                                </label>
                                                <span style={{ padding: "10px" }}>{item.quantity}</span>
                                                <label onClick={() => { increment(item, index) }}>
                                                    <FaPlus />
                                                </label>
                                            </div>
                                        </td>
                                        <td style={{ fontSize: '19px' }}>  <label className='data-text'></label>
                                            ${item.NewPrice * item.quantity}
                                        </td>
                                        <td><label className='data-text1'></label>
                                            <div className='whishlist-button'>
                                                <FiShoppingCart />
                                            </div>
                                            <div className='whishlist-button1' onClick={() => { setdeleteWishListId(item.id); setshowdeletePopup(true) }}><FaTrashCan /></div>
                                        </td>
                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                    <div class="btn-toolbar" >
                        <div class="btn-group me-2">
                            {
                                PageNumber && PageNumber.map((item) =>
                                    <button type="button" class="btn wishlistPage" onClick={() => { gotoPage(item) }}>{item}</button>
                                )
                            }



                        </div>
                    </div>
                </div>


            </div>
            <div>
                <ModalPopup open={showdeletePopup} title={"Delete WishList Item"} closeModal={() => { setshowdeletePopup(false) }}>
                    <DeletePopup deleteWishListItem ={() => { deletewishlistProduct(); setshowdeletePopup(false) }}></DeletePopup>
                </ModalPopup>

            </div>

            <div className='whilist-foot'></div>=

        </div>
    );
}