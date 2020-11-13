/* AQUI SERÁ ONDE FICARA OS ADD DOS CONTATOS */

import styled from 'styled-components'

export const AddContactStyled = styled.div`
        /*CONTACT DO SITE*/
        width:100vw;

        .contact{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100vw;
            margin-top:100px;

            input{

                width:500px;
                height:40px;
                border:0;
                border-radius:15px;
                background-color:#444;
                margin:5px;
                padding:5px;
                

            }
            
            h1{

                color: white;
                text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
                margin-bottom:40px;


            }

            button{
            color: white;
            font-size: 25px;
            width: 180px;
            height: 56px;
            display: inline-block;
            background-color: #333;
            margin-top:10px;
            border-top:0;
            border-right: 0;
            border-left: 0;
            cursor: pointer;
            transition:0.2s;
            border-bottom: 5px solid #333;
            border-radius:15px;



                &:hover{
                    text-shadow: 2px 2px 8px green; 


                }

            }

        }

    



        p{

            color:white;

        }




`