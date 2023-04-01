import { Card, Profile } from ".";
import { BsPlus } from "react-icons/bs";
import { Container } from "../../AppStyle";
import pizzaImg from "../../assets/images/pizza.png";
import { pizza } from "../../types/pizzaType";



export const ShopItem = ({ name, description, img, price }: pizza) => {

    return (

        <Card>
            <div className="action">
                <Profile src={img ? img : pizzaImg} />
                <button><BsPlus color="#fff"/></button>
            </div>


            <div className="desc">
                <span>{`R$${price?.toFixed(2)}`}</span>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>


        </Card>


    )
}