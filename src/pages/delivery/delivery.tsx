import { Container } from "../../AppStyle";
import { GridContainer } from ".";
import { ShopItem } from "../../Componentes/shopItem/shopItem";
import { pizzas } from "../../data/pizzas";





export const Delivery = () => {
    return(
        
        <Container>
            
            <GridContainer>

                {pizzas.map((item)=>(
                    <ShopItem img={item.img} description={item.description} name={item.name} price={item.price} />
                ))}

            </GridContainer>
            
        </Container>
               
    )
}