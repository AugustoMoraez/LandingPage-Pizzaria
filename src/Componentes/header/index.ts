import styled from "styled-components";


export const ContainerNav = styled.header`
    width: 100%;
    background-color: #E50034;
`;
export const Menu = styled.div`
    width: 100%;
    max-width: 1340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 10px;
    
    .cart{
        display: flex;
        flex-direction:column ;
        justify-content:center;
        align-items:center;
    }

    .value::before{
        content: attr(data-count);
        margin-right: 25px;
    }

    .cart svg{
        margin-right: 25px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    nav ul{
        display: flex;
    }
    button{
        width: 85px;
        padding: 5px;
        border: 1px solid white;
        border-radius: 5px;
        background-color: #CC0029;
        margin: auto 10px;
        font-size: 18px;
        transition: all ease-in-out 0.5s;
    }
    button:hover{
        background-color: white;
        color: #E50034;
        cursor: pointer;
        
    }
    @media(max-width:500px){
        button{
            width: 70px;
            font-size: 14px;
        }
        flex-direction: column-reverse;
        .cart{
            margin: 0px;
            margin-bottom: 10px;
        }
        .cart svg{
            margin: 0;
        }
        .value{
        margin: 0;
    }
    }
`;