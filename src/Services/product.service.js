import { read } from "./context.service";



const ProductUrl = "http://localhost:4002/productsDetails";


//create a function
export function getProducts(){
    return read(ProductUrl);
}
