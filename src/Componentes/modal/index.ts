import styled from "styled-components";


type modal = {
    toggle:boolean
}

export const ModalContainer = styled.div<modal>`
    display: ${(prop)=> prop.toggle ? "block" : "none"};
    position:absolute;
    position: fixed;
    z-index:99;
    overflow:hidden;
    background-color:white;
    background-color:rgba(255,255,255,0.7) ;
    width:100%;
    max-width:100vw;
    height:100vh;
    
`;

export const ModalBox = styled.div`
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width: 100%;
    max-width:750px;
    height: 450px;
    background: #f9f9f9;
    border-radius:10px;
    box-shadow:0px 2px 5px #333;
    @media(max-width:750px){
        flex-direction:column ;
        justify-content:center;
        max-width:100vw;
        height: 100vh;
        border-radius:0 ;
        background-color:rgba(255,255,255,0.8)
    }

`;
type ModalImageType = {
    src:string
}
export const ModalImage = styled.div<ModalImageType>`
    background-image:url(${(prop)=>prop.src});
    background-size:cover ;
    background-position:center;
    width: 100%;
    max-width:300px;
    height: 300px;
    margin:auto;
    @media(max-width:750px){
        margin: 30px auto;
    }
    @media(max-width:375px){
        max-width:150px;
        height: 150px;
        margin: 10px auto;
    }
`;

export const ModalActions = styled.div`
    *{
        color: #333;
        text-align:center;
    }
    .info{
        h3{
            font-family:'Fasthand';
            font-size:50px;
            font-weight:100;
            
        }
        p{
            font-size:15px ;
            color: #969696;
        }

    }
    .sizes{
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin: 15px auto;
        span{
            margin-bottom:10px ;
            color: #666;
            font-size:20px ;
        }
        .size-options{
            display: flex;
            width: 100%;
            max-width: 400px;
            button{
                width: 100%;
                max-width:133px;
                padding: 3px 2px;
                background-color:#EEE;
                font-weight:bold;
                p{
                    color: #999;
                }
               
            }
            button:hover{
                background-color:#d4d4d4; 
                cursor: pointer;
            }
            button:first-child{
                border-top-left-radius: 10px ;
                border-bottom-left-radius: 10px;
            }
            button:last-child{
                border-top-right-radius: 10px ;
                border-bottom-right-radius: 10px;
            }
        }
    }
    .qtd{
        .countBox{
            width: 100%;
            padding: 10px;
            display: flex;
            justify-content:space-between;
            align-items:center;



            .count{
                display: flex;
                padding: 10px;
                width:75px;
                flex-direction:row;
                cursor: default;

                button{
                    width: 25px;
                    background-color:#EEE;  
                    cursor: pointer;

                    
                }
                button:first-child{
                    border-top-left-radius: 10px ;
                    border-bottom-left-radius: 10px;
                }

                .qt{
                    width: 25px;
                    background-color:#EEE;
                }

                button:last-child{
                    border-top-right-radius: 10px ;
                    border-bottom-right-radius: 10px;
                }
                &:hover button  {
                    background-color:#d4d4d4 ;
                    cursor: pointer;
                }








            }
        }
    }
    .actions{
        display: flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;
        button{
            width: 50%;
            margin-bottom:10px;
            border-radius: 7px ;
            padding: 3px 0px;
            font-size:20px ;
            cursor:pointer;
            transition:all ease-in-out 0.5s
        }
        button:first-child{
            background-color: #E50034;
            color: white;
            &:hover{
                opacity:0.7;
            }
        }
        button:last-child{
            
           font-size:15px;
            
        }
    }

`;
