import {ModalContainer, ModalBox,ModalImage,ModalActions} from ".";
import { useState } from "react";
import {modalDataType} from "../../hooks/reducers/reducerModal"
import { useContext } from "react";
import { ContextToggles } from "../../hooks/contexts/contextToggles";

export const Modal = ({toggle,item}:modalDataType) => {
  
    const{dispatch} = useContext(ContextToggles)
    


    const[count,setCount] = useState(0);
    

    const addQt = () => {
        if(count === 0){
            setCount(count + 1)
        }else if(count === 10){
            setCount(0);
        }
    }
    const removeQt = () => {
        if(count > 0){
            setCount(count-1)
        }else if(count === 0){
            setCount(0)
        }
    }

    const CloseModal = () => {
        dispatch({
            type:"Close_Modal",
            payload:{
                toggle:false,
                
            }
        })
    }

    return(
        <ModalContainer toggle={toggle}>
            <ModalBox>
                <ModalImage src={item.img ? item.img : ""}/>
                <ModalActions>
                    <div className="info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>

                    </div>
                    <div className="sizes">
                        <span>Tamanhos</span>
                        <div className="size-options">
                            <button>Pequenha <p>300g</p></button>
                            <button>Media <p>500g</p></button>
                            <button>Grande <p>700g</p></button>
                        </div>
                    </div>
                    <div className="qtd">
                        <span>Preço</span>
                        <div className="countBox">
                            <p>{`R$${item.price && (item.price * count).toFixed(2)}`}</p>
                            <div className="count">
                                <button onClick={removeQt}>-</button>
                                <div className="qt">{count}</div>
                                <button onClick={addQt}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button>Adicionar</button>
                        <button onClick={CloseModal}>Cancelar</button>
                    </div>
                </ModalActions>
            </ModalBox>
        </ModalContainer>
    )
}