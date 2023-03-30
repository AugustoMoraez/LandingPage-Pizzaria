import styled from "styled-components";



export const ContainerBanner = styled.div`
    background-color: #CC0029;
`;
export const BannerBox = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    
    .logo{
        font-family: 'Fasthand';
        font-size: 40px;
    }


    .banner{
        width: 100%;
        max-width: 1000px;
        height: 80px;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: right;
        align-items: flex-end;

        div{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid #eee;
            margin-left: 20px;
            
            img{
                width:95px;
                height: 95px;
            }
        }
    }

    @media (max-width:820px) {
        justify-content: center;
        padding: 10px;
        .banner{
            display: none;
        }
    }
`;