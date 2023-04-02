import React, { createContext,useReducer } from "react";
import { modalDataType, initialModalState, reducerModal } from "../reducers/reducerModal";
import { initialCartState,reducerCart } from "../reducers/reducerCart";
import { itemCartType } from "../../types/itemCart";
import { reducerActionType } from "../../types/reducerActionType";


type initialStateType = {
    modal:modalDataType
    cart:itemCartType[]
}

type ContextType = {
    state:initialStateType,
    dispatch: React.Dispatch<any>
} 

const initialState = {
    modal:initialModalState,
    cart:initialCartState
}

export const Context = createContext<ContextType>({
    state:initialState,
    dispatch: () => null
})

const mainReducer = (state:initialStateType,action:reducerActionType) => ({
    modal: reducerModal(state.modal,action),
    cart: reducerCart(state.cart,action)
})

export const ContextProvider = ({children}:React.PropsWithChildren) => {
    
    const[state,dispatch] = useReducer(mainReducer,initialState);
    
    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}