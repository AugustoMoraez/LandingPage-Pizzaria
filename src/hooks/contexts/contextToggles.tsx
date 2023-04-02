import React, { createContext,useReducer } from "react";
import { modalDataType, initialModalState, reducerModal } from "../reducers/reducerModal";
import { reducerActionType } from "../../types/reducerActionType";


type initialStateType = {
    modal:modalDataType
}

type ContextType = {
    state:initialStateType,
    dispatch: React.Dispatch<any>
} 

const initialState = {
    modal:initialModalState
}

export const ContextToggles = createContext<ContextType>({
    state:initialState,
    dispatch: () => null
})

const mainReducer = (state:initialStateType,action:reducerActionType) => ({
    modal: reducerModal(state.modal,action)
})

export const ContextProvider = ({children}:React.PropsWithChildren) => {
    
    const[state,dispatch] = useReducer(mainReducer,initialState);
    
    return(
        <ContextToggles.Provider value={{state,dispatch}}>
            {children}
        </ContextToggles.Provider>
    )
}