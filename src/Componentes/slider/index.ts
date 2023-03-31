import styled from "styled-components";



export const SlideViwer = styled.div`
    width: 100vw;
    height: calc(100vh - 196px);
    overflow: hidden;
    
`;
type SliderShowType = {
    MoveTo:number|string
}
export const SliderShow = styled.div<SliderShowType>`
    display: flex;
    width: 300vw;
    height: inherit;
    transition: all ease-in-out 1.5s;
    margin-left: ${(prop)=>`-${prop.MoveTo}vw`};
`;
type ItemSlideType = {
    bg:string
}
export const ItemSlide = styled.div<ItemSlideType>`
    width: 100vw;
    height: calc(100vh - 196px);;
    background-image: url(${(prop)=>prop.bg});   
    background-size :cover ;
    background-position: center;
`;

