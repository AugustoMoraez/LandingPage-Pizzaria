import { Item } from "../../Componentes/itemCart";
import { cartDB } from "../../data/cartDB";
import { itemCartType } from "../../types/itemCart";
import { reducerActionType } from "../../types/reducerActionType";



export const initialCartState: itemCartType[] = cartDB("cart");


export const reducerCart = (state: itemCartType[], action: reducerActionType) => {

    switch (action.type) {
        case "Add_Cart":
            let newState = [...state];
            if (action.payload.itemCart && state.length == 0) {
                newState.push(action.payload.itemCart);
                state = newState;
                localStorage.setItem("cart", JSON.stringify(state));
                return state;
            } else {
                const filter = newState.filter((item) => item.item.name == action.payload.itemCart.item.name);
                const itemToAdd = filter.length == 0 ? null : filter[0];
                const item: itemCartType = action.payload.itemCart

                if (item.item.name === itemToAdd?.item.name) {
                    
                } else {
                    newState.push(item);
                    state = newState;
                    localStorage.setItem("cart", JSON.stringify(state));
                    return state;
                }



            }
            break;




        case "Remove_Cart":
            if (state.length === 1) {
                let newState = [...state]
                state = newState.filter((item) => item.key !== action.payload.itemCart.key)
                localStorage.setItem("cart", JSON.stringify([]));
                return state

            } else {
                let newState = [...state]
                state = newState.filter((item) => item.key !== action.payload.itemCart.key)
                localStorage.setItem("cart", JSON.stringify(state));
                return state
            }


            break
    }


    return state;
}