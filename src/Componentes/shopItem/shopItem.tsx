import { Card, Profile } from ".";
import pizzaImg from "../../assets/images/pizza.png";
import { pizza } from "../../types/pizzaType";
import { useContext } from "react";
import { Context } from "../../hooks/contexts/context";







export const ShopItem = ({ name, description, img, price }: pizza) => {
    
    const{dispatch} = useContext(Context);
    
   const HandleModal = () => {
        dispatch({
            type:"Open_Modal",
            payload:{
                toggle:true,
                item:{
                    name:name,
                    img:img,
                    price:price,
                    sizes:["aa","ff"],
                    description:description,
                }
            }
        })
   }


    return (

        <Card>
            <div className="action">
                <Profile src={img ? img : pizzaImg} />
                <button onClick={()=>HandleModal()} >+</button>
            </div>


            <div className="desc">
                <span>{`R$${price?.toFixed(2)}`}</span>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>


        </Card>


    )
}