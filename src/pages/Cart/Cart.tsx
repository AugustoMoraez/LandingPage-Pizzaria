import { itemCartType } from "../../types/itemCart";
import { CartContainer, CartBox,  } from ".";
import { ItemCart } from "../../Componentes/itemCart/itemCart";

type cartType = {
    data: itemCartType[]
}

export const Cart = ({ data }: cartType) => {
    return (
        <CartContainer>
            
            <CartBox>
                <h2>Carrinho</h2>

                <div className="itens-display">
                
                    {data.map((item,index)=>(
                        <ItemCart item={item} key={index}  />
                    ))}


                </div>
                <div className="actions">
                    <button>Comprar</button>
                    <button>Cancelar</button>
                </div>
            </CartBox>

        </CartContainer>

    )
}