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
import { ContextToggles } from "./hooks/contexts/contextToggles";



function App() {
  const{state} = useContext(ContextToggles)

  return ( 
    <>
    
    <Modal item={state.modal.item} toggle={state.modal.toggle}/>
    
    <Main>
      <Banner/>
      <Header/>
      

      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/delivery" element={<Delivery/>}/> 
        <Route path="/carrinho" element={<Cart/>}/> 
        <Route path="/reserva" element={<Reserva/>}/> 

      </Routes>

    </Main>
    
    </>
    
  )
}

export default App
