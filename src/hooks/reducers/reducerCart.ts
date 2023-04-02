import { itemCartType } from "../../types/itemCart";
import { reducerActionType } from "../../types/reducerActionType";



export const initialCartState: itemCartType[] = []


export const reducerCart = (state: itemCartType[], action: reducerActionType) => {
    switch (action.type) {
        case "Add_Cart":
            if(action.payload.itemCart){
                const newState = [...state];
                newState.push(action.payload.itemCart);
                return  newState 
            }
            
        
        break;
    }


    return state;
}