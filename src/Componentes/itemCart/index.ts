import styled from "styled-components";

export const Item = styled.div`
    margin-bottom:20px;
    padding: 10px;
    &:hover{
        background-color: rgba(0,0,0,0.3);
        
    }
    .content{
        display: flex;
        align-items:center;
        justify-content:left;
        img{
            width: 100px;
            height: 100px;
            margin-left:30px ;
        }
        .info{
            display: flex;
            flex-direction:column ;
            margin: auto;
            span{
                color: #333;
                text-align:center;
                font-weight:bold;
                font-size:20px
                
            }
        }
        @media(max-width:500px){
            img{
                width: 70px;
                height: 70px;
                margin: 0;
            }
            .info{
                
                span{
                    font-size:16px;                   
                }
            }


        }
        @media(max-width:320px){
            img{
                width: 50px;
                height: 50px;
                margin: 0;
            }
            .info{
                
                span{
                    font-size:10px;                   
                }
            }


        }

    }
    .buttons{
        display: flex;
        align-items:center;
        justify-content:center;
        margin-right:30px ;
        
        
        @media(max-width:500px){
            flex-direction:column;
            margin: 0;
            .Remove{
                margin-bottom:6px ;
            }
        }
        


        .Remove{
            margin-right:20px ;
            display: flex;
            align-items:center;
            justify-content:center;
            
            &:hover{
                cursor:pointer;
            }

            path{
                color: black;
            }
            &:hover path{
                color: red;
            }
        }
       
       

        .counters{
            display: flex;
            justify-content:center;
            align-items:center;
            margin-right:10px;
            width: 60px;

            
            
            .menos,.value,.mais{
                font-size:18px ;
                padding: 1px 2px;
                background-color:rgba(0,0,0,0.4);
                color: #333;
                width: 100%;
                width: 30px;
            }
            .value{
                cursor: default;
                padding: 1px 5px;
                background-color:rgba(0,0,0,0.3);
                
                color: white;
            }
            .menos{
                cursor: pointer;
                border-top-left-radius:5px;
                border-bottom-left-radius:5px;
                text-align:center;
                
            }
            .mais{
                cursor: pointer;
                border-top-right-radius:5px;
                border-bottom-right-radius:5px;
                text-align:center;
                
            }
           
            .menos:hover,.mais:hover{
                background-color:#E50034 ;
                color: white;
            }
        }
        
    }
   

`;