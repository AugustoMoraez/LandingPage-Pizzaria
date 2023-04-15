import { itemCartType } from "../../types/itemCart";
import { CartContainer, CartBox, VoidCart } from ".";
import { ItemCart } from "../../Componentes/itemCart/itemCart";
import { useContext } from "react";
import { Context } from "../../hooks/contexts/context";


type cartType = {
    data: itemCartType[];
}

export const Cart = ({ data }: cartType) => {

    const{state}=useContext(Context)

    return (
        <CartContainer>
            
            <CartBox>
                <h2>Carrinho</h2>
                
                {
                    data?.length === 0
                    ?
                    <VoidCart>
                        <h4>Carrinho Vazio :(</h4>
                    </VoidCart>
                    :
                    <div className="itens-display">
                        {data.map((item,index)=>(
                            <ItemCart item={item} key={index}  />
                        ))}
                    </div>
                }

                {
                data?.length === 0 
                ?
                <div></div>
                :
                
                <div className="actions">
                    <button
                    onClick={()=>alert(`voce comprou pizzas de ${data.map((item)=> item.item.name +" no tamanho de " +" valor de " + " R$"+item.itemValue+",00 ")}`)}>Comprar</button>
                </div>
                
                }
            </CartBox>

        </CartContainer>

    )
}