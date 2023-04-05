import { ContainerNav, Menu } from ".";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { Context } from "../../hooks/contexts/context";
import {useContext } from "react";
import { itemCartType } from "../../types/itemCart";
import { ItemCart } from "../itemCart/itemCart";
import { cartDB } from "../../data/cartDB";


export const Header = () => {
    

    const{state} = useContext(Context);

    const totalValue = (item:itemCartType[] | null) => {
        let total = 0
        {
            item !== null
            ?
            item.map((item)=>{
                return total = parseInt(item.itemValue) + total
            })
            :
            total = 0
        }
        return total
        
    }

    const nav = useNavigate();
    return (
        <ContainerNav>
            <Menu>
                <nav>
                    <ul>
                        <li>
                            <button onClick={()=>nav("/")}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={()=>nav("/delivery")}>Pizzas</button>
                        </li>
                        <li>
                            <button onClick={()=>nav("/reserva")}>Reserva</button>
                        </li>
                    </ul>
                </nav>
                <div className="cart" onClick={()=>nav("/carrinho")}>
                    <BsFillCartFill  />
                    <div className="value" data-count={`R$${totalValue(cartDB("cart"))},00`}></div>
                </div>
            </Menu>
        </ContainerNav>
    )
}