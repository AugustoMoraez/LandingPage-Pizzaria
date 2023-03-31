import {SlideViwer,SliderShow,ItemSlide} from ".";
import bg from "../../assets/images/bg.png";
import bg2 from "../../assets/images/bg2.png";
import bg3 from "../../assets/images/bg3.png";
import {useState , useEffect} from "react"


export const Slider = () => {

    const[count,setCount]= useState(0);

    const handleSlide = () => {
        let numb = 100
        if(count == 0 || count <200){
            setCount(count+ numb)
        }else{
            setCount(0)
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            handleSlide()
        },3000)
    },[count])

    return(
        <SlideViwer>
            <SliderShow MoveTo={count}>
                <ItemSlide bg={bg}></ItemSlide>
                <ItemSlide bg={bg2}></ItemSlide>
                <ItemSlide bg={bg3}></ItemSlide>
            </SliderShow>
        </SlideViwer>
    )
}