import { itemCartType } from "../../types/itemCart";
import { Item } from ".";
import { FaTrash } from "react-icons/fa";
import { useContext,useState } from "react";
import { Context } from "../../hooks/contexts/context";

type cart = {
    item: itemCartType
}

export const ItemCart = ({ item }: cart) => {

    const[qt,setQt] = useState<number>(item.qt)
    

    const{dispatch} = useContext(Context);


    const handleSize = (size: number) => {

        let sizeItem = "";
        switch (size) {
            case -7:
                sizeItem = "P"
                return sizeItem
                break;
            case 0:
                sizeItem = "M"
                return sizeItem
                break;
            case 10:
                sizeItem = "G"
                return sizeItem
                break;
        }

    }
    const handleRemoveItemCart = (itemCart:itemCartType) => {
        dispatch({
            type:"Remove_Cart",
            payload:{
                itemCart:itemCart
            }
        })
    }

    return (
        <Item>
            <div className="content">
                <img src={item.item.img} alt={item.item.name}  />
                <div className="info">
                    <span>Qt: {item.qt}</span>
                    <span className="name"> {` ${item.item.name} - ${handleSize(item.size)}`}</span>
                    <span>Valor:{`R$${item.itemValue},00`}</span>
                </div>
                <div className="buttons">
                    <div className="Remove" onClick={()=> handleRemoveItemCart(item)}><FaTrash/></div>
                    <div className="counters">
                        <div className="menos">-</div>
                        <div className="value">{qt}</div>
                        <div className="mais">+</div>
                    </div>
                </div>
            </div>

        </Item>
    )
}