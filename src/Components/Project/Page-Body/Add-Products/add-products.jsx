import { useForm } from 'react-hook-form';
import '../Add-Products/add-products.css';
import { useState } from 'react';
import axios from 'axios';



export function AddProducts() {

    const [productImage, setproductImage] = useState()


    const {
        register,
        handleSubmit
    } = useForm();

    async function saveData(data) {
        let formData = new FormData();

        formData.append("ProductName", data.ProductName);
        formData.append("NewPrice", data.NewPrice);
        formData.append("OldPrice", data.OldPrice);
        formData.append("Discount", data.Discount);
        formData.append("StockAvalible", data.StockAvalible);
        formData.append("productImage", productImage)

        const config = {
            header: { "content-Type": "multipart/form-data" }
        }
        const res = await axios.post("http://localhost:4002/saveProductDetails", formData, config);
        window.location.reload();
    }

    function loadImages(event) {
        var render = new FileReader();
        render.onload = function () {
            setproductImage(render.result);

        }
        render.readAsDataURL(event.target.files[0]);
    }

    return (

        <div >

            <form className='addProdct-form mt-5' onSubmit={handleSubmit((data) => { saveData(data) })}>
                <div class='addproduct'><h3><b>ADD NEW PRODUCTS</b></h3></div>


                <div>
                    <div><b>Product Name</b></div>
                    <input type="text" placeholder='Product Name..' className='form-control' {...register("ProductName")} />
                </div>
                <div>
                    <div><b>Product Old Price</b></div>
                    <input type="text" placeholder='Product Old Price..' className='form-control' {...register("NewPrice")} />
                </div>
                <div>
                    <div><b>Product New Price</b></div>
                    <input type="text" placeholder='Product New Price..' className='form-control' {...register("OldPrice")} />
                </div>
                <div>
                    <div><b>Product Discount</b></div>
                    <input type="text" placeholder='Product Discount..' className='form-control' {...register("Discount")} />
                </div>
                <div>
                    <div><b>Stock Available</b></div>
                    <input type="text" placeholder='Stock Available..' className='form-control' {...register("StockAvalible")} />
                </div>
                <div>
                    <div><b>Product Image</b></div>
                    <input type='file' className='form-control' {...register("productImage")} onChange={(event) => { loadImages(event) }} />
                </div>
                <div>
                    <input type="submit" value="Submit" className='btn addProdct-form-btn ' />
                    <input type="reset" value="Cancel" className='btn btn-secondary' />
                </div>
            </form>
           
           
        </div>



    );

}