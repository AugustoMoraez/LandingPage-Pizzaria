import { cartDB } from "../../data/cartDB";
import { itemCartType } from "../../types/itemCart";
import { reducerActionType } from "../../types/reducerActionType";



export const initialCartState: itemCartType[] = cartDB("cart");


export const reducerCart = (state: itemCartType[], action: reducerActionType) => {

    switch (action.type) {
        case "Add_Cart":
            if(action.payload.itemCart){
                const newState = [...state];
                newState.push(action.payload.itemCart);
                localStorage.setItem("cart",JSON.stringify(newState));
                return  newState 
            }
        break;
        case "Remove_Cart":
            let newState = [...state]
            state = newState.filter((item)=> item.key !== action.payload.itemCart.key)
            localStorage.setItem("cart",JSON.stringify(state));
            return state
            
        break
    }


    return state;
}