import { createStore } from "redux";


const reducer = (state, action)=>{

    switch(action.type){
        case "login":
            return{
            ...state, user : action.data
            }
            case "product":
                return{
                    ...state, products: action.data
                }
    }
}
const Store = createStore(reducer);

export default Store;