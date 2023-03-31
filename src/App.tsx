import { Main } from "./AppStyle";
import { Banner } from "./Componentes/banner/banner";
import { Header } from "./Componentes/header/header";
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

function App() {
  

  return (
    <Main>
      <Banner/>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/> 

      </Routes>

    </Main>
  )
}

export default App
