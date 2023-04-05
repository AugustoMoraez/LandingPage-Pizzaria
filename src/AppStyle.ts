import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    
`;

type contType = {
    color:"#fff" | "#333"
}

export const Container = styled.div<contType>`
    color: ${(prop)=> prop.color};
    width: 100%;
    max-width: 1340px;
    margin: auto;
    padding: 10px;
`;