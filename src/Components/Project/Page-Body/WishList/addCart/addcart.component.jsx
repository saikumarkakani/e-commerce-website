
import '../addCart/addcart.component.css';
import pic from '../../../../../Assests/Images/pic44.webp';
import { useEffect, useState } from 'react';

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";

import { getaddCartData } from '../../../../../Services/addcart.service';
import ModalPopup from '../../Shared-Components/modalpopup';
import axios from 'axios';
import { DeleteAddcart } from '../Delete-Popup/Delete-Addcart/deleteAddcart';



export function AddCart() {

    const [addCartData, setaddCartData] = useState([]);

    const [PageSize, setPageSize] = useState(3);
    const [PageNumber, setPageNumber] = useState([]);
    const [TotaladdcartItem, setTotaladdcartItem] = useState([]);
    
    const [ShowDeletepopup, setShowDeletepopup] = useState(false);
    const [deleteAddcartItem, setdeleteAddcartItem] = useState(0);






    useEffect(() => {
        getaddCartData().then((res) => {
            setTotaladdcartItem(res.data);
            let pNumbers = Math.ceil(res.data.length / PageSize);
            let pNumberArrays = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumberArrays.push(i)
            }
            setPageNumber(pNumberArrays);
            let data = res.data.slice(0, PageSize);

            setaddCartData(data);
        })

    }, [])

    //for increment
    function Addcartincrement(item, index) {

        let data = JSON.parse(JSON.stringify(addCartData));
        data[index].Quantity = item.Quantity + 1;
        setaddCartData(data);

    }
    //for decrement
    function AddCartdecrement(item, index) {
        if (item.Quantity > 0) {
            let data = JSON.parse(JSON.stringify(addCartData));
            data[index].Quantity = item.Quantity - 1;
            setaddCartData(data);
        }
    }

    function gotoPage(num) {
        let startIndex = PageSize * (num - 1);
        let endIndex = PageSize * num;
        let res = TotaladdcartItem.slice(startIndex, endIndex);
        setaddCartData(res);
    }




    async function deleteAddcartProduct() {
        if (deleteAddcartItem > 0) {
            const config = {
                header: { "content-Type": "multipart/form-data" }
            };
            const newForm = new FormData();
            newForm.append('Id', deleteAddcartItem);
            const res = await axios.post("http://localhost:4002/deleteAddcartItem", newForm, config);
            window.location.reload();
        }
    }


    return (
        <div>

            <div className='about-color'>
                <h1 className='about'>Add Cart</h1>
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
                                addCartData && addCartData.map((item, index) =>

                                    <tr>
                                        <td>

                                            {
                                                item.productImage && <img src={item.productImage} alt="image" className='wishlist-img' />
                                            }
                                            {
                                                !item.productImage && <img src={pic} alt="image" className='wishlist-img' />
                                            }

                                            <label style={{ bottom: '10px' }}></label>
                                            <label style={{ fontSize: '16px' }} className='wishlist-text'><b>
                                                {item.ProductName}
                                            </b>
                                            </label>

                                        </td>
                                        <td style={{ fontSize: '19px' }}><label className='data-text'></label>
                                            ${item.OldPrice}
                                        </td>
                                        <td ><label className='data-text'></label>
                                            <div style={{ border: '1px solid #ccc', padding: '6px', borderRadius: '2px', display: 'inline-block', width: '120px' }}>
                                                <label >
                                                    <FaMinus onClick={() => { AddCartdecrement(item, index) }} />
                                                </label>
                                                <span style={{ padding: "10px" }}>{item.Quantity}</span>
                                                <label onClick={() => { Addcartincrement(item, index) }}>
                                                    <FaPlus />
                                                </label>
                                            </div>
                                        </td>
                                        <td style={{ fontSize: '19px' }}>  <label className='data-text'></label>
                                            ${item.NewPrice * item.Quantity}
                                        </td>
                                        <td><label className='data-text1'></label>
                                            <div className='whishlist-button'>
                                                <FiShoppingCart />
                                            </div>
                                            <div className='whishlist-button1' onClick={() => {setdeleteAddcartItem(item.Id); setShowDeletepopup(true) }}><FaTrashCan /></div>
                                        </td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                    <div class="btn-toolbar" style={{ marginLeft: "40px" }}>
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
                <ModalPopup open={ShowDeletepopup} title={"AddCart Delete Item"} closeModal={() => { setShowDeletepopup(false) }} >
                <DeleteAddcart deleteAddCartId = {()=>{deleteAddcartProduct(); setShowDeletepopup(false)}}></DeleteAddcart>
                </ModalPopup>
            </div>




            <div className='whilist-foot'></div>

        </div>
    );
}