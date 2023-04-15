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
                state = newState.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                localStorage.setItem("cart", JSON.stringify(state));
                return state;
            } else {
                const filter = newState.filter((item) => item.size == action.payload.itemCart.size);
                const item: itemCartType = action.payload.itemCart
                const itemToAdd = filter.filter((item) => item.item.name === action.payload.itemCart.item.name)

                if (item.item.name === itemToAdd[0]?.item.name) {

                    if (item.size === itemToAdd[0]?.size) {

                        const newQt = (item.qt + itemToAdd[0].qt);
                        const newValue = `${(parseInt(item.itemValue) + parseInt(itemToAdd[0].itemValue))}`;
                        const NewItem = {
                            item: item.item,
                            size: item.size,
                            qt: newQt,
                            itemValue: newValue,
                            key: itemToAdd[0].key
                        }
                        const newArray = newState.filter((item) => item.key !== itemToAdd[0].key);
                        newArray.push(NewItem);
                        state = newArray.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                        localStorage.setItem("cart", JSON.stringify(state));
                        return state;

                    } else {
                        newState.push(item);
                        state = newState.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                        localStorage.setItem("cart", JSON.stringify(state));
                        return state;
                    }
                } else {
                    newState.push(item);
                    state = newState.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                    localStorage.setItem("cart", JSON.stringify(state));
                    return state;
                }

            }


        case "Remove_Cart":

            if (state.length === 1) {
                let newState = [...state]
                state = newState.filter((item) => item.key !== action.payload.itemCart.key)
                localStorage.setItem("cart", JSON.stringify([]));
                return state

            } else {
                let newState = [...state]
                state = newState.filter((item) => item.key !== action.payload.itemCart.key)
                const newArray = state.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                localStorage.setItem("cart", JSON.stringify(newArray));
                return state
            }


            break
        case "Add_Qt":
            if(action){
                let filter = state.filter((item)=>item.key !== action.payload.itemCart.key);
                filter.push(action.payload.itemCart);
                state = filter.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
                localStorage.setItem("cart", JSON.stringify(state));
                return state;
            }
        

        break
        case "Remove_Qt":
            if(action){
                const newState = [...state]
                state = newState.sort((a,b)=> (a.item.price > b.item.price) ? 1 : -1);
            }

        break
    }


    return state;
}