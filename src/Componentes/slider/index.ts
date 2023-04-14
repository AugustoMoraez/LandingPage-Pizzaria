import styled from "styled-components";



export const SlideViwer = styled.div`
    width: 100vw;
    height: calc(100vh - 196px);
    overflow: hidden;
    position:relative;
    .left{
        cursor: pointer;
        position: absolute;
        z-index: 99;
        left: 30px;
        top: 50%;
        transform: translate(-50%,0%);
        @media(max-width:500px){
           
            top: 30px;
        }
    }
    .left svg{
        width: 50px;
        height: 50px;
        @media(max-width:500px){
            width: 30px;
            height: 30px;
            
        }
    }
    .right{
        cursor: pointer;
        position: absolute;
        z-index: 99;
        right: 5px;
        top: 50%;
        transform: translate(-50%,0%);
        @media(max-width:500px){
            
            top: 30px;
        }
    }
    .right svg{
        width: 50px;
        height: 50px;
        @media(max-width:500px){
            width: 30px;
            height: 30px;
            top: 30px;
        }
    }
`;

type SliderShowType = {
    MoveTo:number|string
}
export const SliderShow = styled.div<SliderShowType>`
    display: flex;
    width: 300vw;
    height: inherit;
    transition: all ease-in-out 1s;
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
export const SlideData = styled.div`
    width: inherit;
    height: inherit;
    background-color: rgba(0,0,0,0.5);
    position: relative;

    .infos{
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-30%);
        text-align: center;
        span{
            font-weight: 700;
            letter-spacing: 5px;
        }
        h1{
            font-size: 80px;
            font-family: 'Fasthand';
            font-weight: 100;
            margin-top: -20px;
          
        }
        p{
            font-size: 20px;
            font-weight: 300;
        }
        div{
            
            flex-wrap: wrap;
        }
       
        div button{
            cursor: pointer;
            margin:20px 10px;
            background-color: #E50034 ;
            font-size: 18px;
            border-radius: 30px;
            padding:6px 10px;
            transition:all ease-in-out 0.3s;
        }
        div button:hover{
            cursor: pointer;
            opacity: 0.9;
        }
        .icons{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }   
        .icons svg{
            width: 15px;
            height: 15px;
            margin-left: 10px;
        }
    }
   @media(max-width:600px){
    .infos{
        h1{
            font-size: 70px;
        }
        p{
            font-size: 16px;
        }
        div button{
            margin: 5px;
            
        }
        div button:first-child{
            margin-top: 15px;
        }
    }
    @media(max-width:500px){
    .infos{
        h1{
            font-size: 50px;
        }
        span{
           
        }
        p{
            width: 300px;
            font-size: 16px;
        }
        
    }
   }
   @media(max-width:300px){
    .infos{
        h1{
            font-size: 50px;
            margin: 5px;
        }
        span{
           font-size: 10px;
        }
        p{
            
            display: none;
        }
        div button{
            font-size: 10px;
        }
        
    }
   }
}

`;


