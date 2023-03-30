import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif, 'Fasthand';
        color: white;
        
    }
    body{
        background-color: #333;
    }
    
    /*
    font-family: 'Open Sans', sans-serif, 'Fasthand'; 
    background color-1: #CC0029
    background color-2/buttons: #E50034    
    */
`;