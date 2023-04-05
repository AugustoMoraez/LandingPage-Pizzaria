import { itemCartType } from "../../types/itemCart";
import { Item } from ".";
import { FaTrash } from "react-icons/fa";


type cart = {
    item: itemCartType
}

export const ItemCart = ({ item }: cart) => {

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


    return (
        <Item>
            <div className="content">
                <img src={item.item.img} alt={item.item.name} />
                <div className="info">
                    <span>{` ${item.item.name} - ${handleSize(item.size)}`}</span>
                    
                </div>
                <div className="buttons">
                    <div className="Remove"><FaTrash/></div>
                    <div className="counters">
                        <div className="menos">-</div>
                        <div className="value">0</div>
                        <div className="mais">+</div>
                    </div>
                </div>
            </div>

        </Item>
    )
}