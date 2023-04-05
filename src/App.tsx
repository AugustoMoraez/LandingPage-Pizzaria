import { Main } from "./AppStyle";
import { Banner } from "./Componentes/banner/banner";
import { Header } from "./Componentes/header/header";
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Delivery } from "./pages/delivery/delivery";
import { Reserva } from "./pages/reserva/reserva";
import {Cart} from "./pages/Cart/Cart";
import { Modal } from "./Componentes/modal/modal";
import { useContext } from "react";
import { Context  } from "./hooks/contexts/context";
import { cartDB } from "./data/cartDB";




function App() {
  const{state} = useContext(Context )


  


  return ( 
    <>
    
    <Modal item={state.modal.item} toggle={state.modal.toggle}/>
    
    <Main>
      <Banner/>
      <Header/>
      

      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/delivery" element={<Delivery/>}/> 
        <Route path="/carrinho" element={<Cart data={cartDB("cart")}/>}/> 
        <Route path="/reserva" element={<Reserva/>}/> 

      </Routes>

    </Main>
    
    </>
    
  )
}

export default App
