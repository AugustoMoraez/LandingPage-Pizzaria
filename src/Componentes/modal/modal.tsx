import {ModalContainer, ModalBox,ModalImage,ModalActions} from ".";
import ft from "../../assets/images/pizza.png";
import { useState } from "react";

export const Modal = () => {
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


    return(
        <ModalContainer toggle={true}>
            <ModalBox>
                <ModalImage src={ft}/>
                <ModalActions>
                    <div className="info">
                        <h3>Mussarela</h3>
                        <p>uma pizza muito boa Lorem
                             ipsum dolor sit amet 
                            consectetur adipi
                             ipsum dolor sit amet 
                            consectetur adipi
                             ipsum dolor sit amet 
                            consectetur adipi
                        </p>
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
                            <p>R$12,00</p>
                            <div className="count">
                                <button onClick={removeQt}>-</button>
                                <div className="qt">{count}</div>
                                <button onClick={addQt}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button>Adicionar</button>
                        <button>Cancelar</button>
                    </div>
                </ModalActions>
            </ModalBox>
        </ModalContainer>
    )
}