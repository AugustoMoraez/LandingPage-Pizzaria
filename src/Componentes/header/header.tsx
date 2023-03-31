import { ContainerNav, Menu } from ".";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

export const Header = () => {

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
                            <button onClick={()=>nav("/delivery")}>Delivery</button>
                        </li>
                        <li>
                            <button onClick={()=>nav("/reserva")}>Reservas</button>
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