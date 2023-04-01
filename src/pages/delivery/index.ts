import styled from "styled-components";

export const GridContainer = styled.div`
    margin:auto;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(330px,1fr));


    @media(max-width:330px){
        display: flex;
        flex-direction: column;
    }
    

`;