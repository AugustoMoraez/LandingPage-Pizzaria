import { pizza } from "../../types/pizzaType";
import { pizzas } from "../../data/pizzas"
import { reducerActionType } from "../../types/reducerActionType";

export type modalDataType = {
    toggle: boolean,
    item: pizza 
}

export const initialModalState: modalDataType = {
    toggle: false,
    item: pizzas[1]
}

export const reducerModal = (state: modalDataType, action: reducerActionType) => {
    switch (action.type) {
        case "Open_Modal":
            state = {
                toggle: action.payload.toggle,
                item: action.payload.item
            }

            return state
            break;
        case "Close_Modal":
            state = {
                toggle: action.payload.toggle,
                item: state.item
            }

            return state
            break;
    }


    return state;
}