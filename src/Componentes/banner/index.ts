import styled from "styled-components";



export const ContainerBanner = styled.div`
    background-color: #CC0029;
`;
export const BannerBox = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    
    .logo{
        font-family: 'Fasthand';
        font-size: 35px;
    }


    .banner{
        width: 100%;
        max-width: 1000px;
        height: 80px;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid #eee;
            
            img{
                width:95px;
                height: 95px;
            }
        }
    }

    @media (max-width:820px) {
        justify-content: center;
        .banner{
            display: none;
        }
    }
`;