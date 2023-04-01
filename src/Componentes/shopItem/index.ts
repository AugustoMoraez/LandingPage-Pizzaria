import styled from "styled-components";


export const Card = styled.div`
    max-width:300px;
    
    margin: 10px auto;
    background-color: #f9f9f9;
    border-radius:10px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column ;
    *{
        color:#333;
    }
    .action {
        padding: 10px;
        button svg{
            width:60px;
            height:60px

            color: #fff;
        }
        button{
            background-color:#E50034 ;
            width: 60px;
            height: 60px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin: auto;
            margin-top:-27px;
            transition: all ease-in-out 0.5s;
        }
        
        button:hover{
            background-color: #fe5c5c;;
            
            cursor:pointer;
        }
        
    }
    .desc {
        text-align:center;
        padding: 10px;
    } 

    @media(max-width:330px){
        max-width:260px;


    }


`;     


type profileType = {
    src:string
}
export const Profile = styled.div<profileType>`
    
    width:250px ;
    height: 250px;
    background-image:url(${(prop)=> prop.src}) ;
    background-size:cover ;
    background-position: center ;
    margin:auto;
    


    @media(max-width:330px){
        max-width:150px;
        height: 150px;

    }
    `;