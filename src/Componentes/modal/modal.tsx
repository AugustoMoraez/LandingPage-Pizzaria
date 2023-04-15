import { ModalContainer, ModalBox, ModalImage, ModalActions } from ".";
import  { useState } from "react";
import { modalDataType } from "../../hooks/reducers/reducerModal"
import { useContext } from "react";
import { Context } from "../../hooks/contexts/context";
import { pizza } from "../../types/pizzaType";
import {v4 as uuidv4} from "uuid";

export const Modal = ({ toggle, item }: modalDataType) => {

    const { dispatch, state } = useContext(Context);
    const [size, setSize] = useState(0)
    const [count, setCount] = useState(1);


    const addQt = (count: number) => {
        if (count >= 1 && count < 10) {
            setCount(count + 1)
        } else if (count === 10) {
            setCount(1);
        }
    }
    const removeQt = (count: number) => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const CloseModal = () => {
        setCount(1);
        dispatch({
            type: "Close_Modal",
            payload: {
                toggle: false,

            }
        })
    }

    const HanldeAddCart = (item: pizza, size: number, qt: number) => {

        dispatch({
            type: "Add_Cart",
            payload: {
                itemCart: {
                    item: item,
                    size: size,
                    qt: qt,
                    itemValue: item.price ? ((item.price + size)*qt).toFixed(0) : 0 ,
                    key:uuidv4()
                }
            }
        })
        CloseModal()
        window.scrollTo({
            top:0,
            
        })
    }

    return (
        <ModalContainer toggle={toggle}>
            <ModalBox>
                <ModalImage src={item.img ? item.img : ""} />
                <ModalActions>
                    <div className="info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>

                    </div>
                    <div className="sizes">
                        <span>Tamanhos</span>
                        <div className="size-options">
                            <button onClick={() => setSize(-7)} >Pequenha </button>
                            <button onClick={() => setSize(0)} >Media </button>
                            <button onClick={() => setSize(10)} >Grande </button>
                        </div>
                    </div>
                    <div className="qtd">
                        <span>Preço</span>
                        <div className="countBox">
                            <p>{`R$${item.price && ((item.price + size) * count).toFixed(2)}`}</p>
                            <div className="count">
                                <button onClick={() => removeQt(count)}>-</button>
                                <div className="qt">{count}</div>
                                <button onClick={() => addQt(count)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button onClick={() => HanldeAddCart(item, size, count)}>Adicionar</button>
                        <button onClick={CloseModal}>Cancelar</button>
                    </div>
                </ModalActions>
            </ModalBox>
        </ModalContainer>
    )
}