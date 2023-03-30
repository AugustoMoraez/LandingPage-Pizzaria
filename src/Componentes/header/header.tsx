import { ContainerNav, Menu } from ".";
import { Container } from "../../AppStyle";
import { BsFillCartFill } from "react-icons/bs";

export const Header = () => {
    return (
        <ContainerNav>
            <Menu>
                <nav>
                    <ul>
                        <li>
                            <button>Inicio</button>
                        </li>
                        <li>
                            <button>Delivery</button>
                        </li>
                        <li>
                            <button>Reservas</button>
                        </li>
                    </ul>
                </nav>
                <div className="cart">
                    <BsFillCartFill />
                </div>
            </Menu>
        </ContainerNav>
    )
}