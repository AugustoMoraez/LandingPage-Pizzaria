import { SlideViwer, SliderShow, ItemSlide, SlideData } from ".";
import bg from "../../assets/images/bg.png";
import bg2 from "../../assets/images/bg2.png";
import bg3 from "../../assets/images/bg3.png";
import { useState, useEffect } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaRegHandPointLeft } from "react-icons/fa";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";



export const Slider = () => {

    const [count, setCount] = useState(0);

    const handleSlidePLus = () => {
        let numb = 100
        if (count <= 0 || count < 200) {
            setCount(count + numb)
        } else {
            setCount(0)
        }
    }
    const handleSlideMinus = () => {
        let numb = 100
        if (count == 100 || 200) {
            setCount(count - numb)
        } else {
            setCount(0)
        }
    }

    

    return (
        <SlideViwer>

            <div className="left" onClick={handleSlideMinus}>
                <BsChevronCompactLeft />
            </div>
            <div className="right" onClick={handleSlidePLus}>
                <BsChevronCompactRight />
            </div>

            <SliderShow MoveTo={count}>
                <ItemSlide bg={bg}>
                    <SlideData>
                        <div className="infos">
                            <span>10 anos de tradição</span>
                            <h1>PizzaKing</h1>
                            <p>Queremos que você tenha a melhor experiência ao apreciar
                                todo o sabor de uma verdadeira pizza.Tradição e qualidade
                                que se iniciam desde a escolha minunciosa dos ingredientes
                            </p>
                            <div>
                                <button>
                                    <div className="icons">
                                        WhatsApp  <FaRegHandPointLeft />
                                    </div>
                                </button>
                                <button>
                                    <div className="icons">
                                        Veja opções   <BsArrowRightCircleFill />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </SlideData>
                </ItemSlide>
                <ItemSlide bg={bg2}>
                    <SlideData>
                        <div className="infos">
                            <span>-30 minutos</span>
                            <h1>Delivery</h1>
                            <p>Promoção no delivery todas as terças! Ta esperando o que? Corre! Queremos que você tenha a melhor experiência ao apreciar
                                todo o sabor de uma verdadeira pizza.
                            </p>
                            <div>
                                <button>
                                    <div className="icons">
                                        WhatsApp   <BsArrowRightCircleFill />
                                    </div>
                                </button>
                                <button>
                                    <div className="icons">
                                        Cardapio   <BsArrowRightCircleFill />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </SlideData>
                </ItemSlide>
                <ItemSlide bg={bg3}>
                    <SlideData>
                        <div className="infos">
                            <span>Preços totalmente acessiveis:</span>
                            <h1>R$100,00/Hrs</h1>
                            <p>Queremos que você tenha a melhor experiência ao apreciar
                                todo o sabor de uma verdadeira pizza.Tradição e qualidade
                                que se iniciam desde a escolha minunciosa dos ingredientes
                            </p>
                            <div>
                                <button>
                                    <div className="icons">
                                        Orçamentos  <FaRegHandPointLeft />
                                    </div>
                                </button>
                                <button>
                                    <div className="icons">
                                        Veja opções   <BsArrowRightCircleFill />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </SlideData>
                </ItemSlide>
            </SliderShow>
        </SlideViwer>
    )
}