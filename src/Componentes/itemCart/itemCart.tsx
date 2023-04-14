import { itemCartType } from "../../types/itemCart";
import { Item } from ".";
import { FaTrash } from "react-icons/fa";
import { useContext,useState } from "react";
import { Context } from "../../hooks/contexts/context";

type cart = {
    item: itemCartType
}

export const ItemCart = ({ item }: cart) => {

    const[ qt, setQt] = useState(1);
    let qtCart = item.qt + 1 ;
    let qtMenos = item.qt - 1;
    

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
    const handleAddQt = (itemCart:itemCartType) => {
        setQt(qt+1);
        dispatch({
            type:"Add_Qt",
            payload:{
                itemCart:{...itemCart, qt:qtCart, itemValue:(item.item.price ?(item.item.price * qtCart).toFixed(0) : itemCart.itemValue)}
            }
        })
        setQt(1);
    }
    const handleRemoveQt = (itemCart:itemCartType) => {
        if(itemCart.qt > 1){
            dispatch({
                type:"Add_Qt",
                payload:{
                    itemCart:{...itemCart, qt:qtMenos, itemValue:(item.item.price ? `${((parseInt(itemCart.itemValue)-(parseInt(item.item.price.toFixed(0))+item.size) ).toFixed(0))}` : itemCart.itemValue)}

                }
            })
        }else{
            dispatch({
                type:"Remove_Cart",
                payload:{
                    itemCart:itemCart
                }
            })
        }
        
        
    }
    return (
        <Item>
            <div className="content">
                <img src={item.item.img} alt={item.item.name}  />
                <div className="info">
                    <span className="name"> {` ${item.item.name} - ${handleSize(item.size)}`}</span>
                    <span>Valor:{`R$${item.itemValue},00`}</span>
                </div>
                <div className="buttons">
                    <div className="Remove" onClick={()=> handleRemoveItemCart(item)}><FaTrash/></div>
                    <div className="counters">
                        <div className="menos" onClick={()=>handleRemoveQt(item)}>-</div>
                        <div className="value">{item.qt}</div>
                        <div className="mais" onClick={()=> handleAddQt(item)}>+</div>
                    </div>
                </div>
            </div>

        </Item>
    )
}