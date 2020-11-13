/* AQUI SERÁ ONDE FICARA OS ADD DOS CONTATOS */

import styled from 'styled-components'

export const EditContactStyled = styled.div`
        /*CONTACT DO SITE*/
        width:100vw;

        .editcontact{
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

            .btn-group{

                display:flex;
                justify-content:space-around;
                margin-top:20px;


                .delete{

                    margin-right:150px;

                    &:hover{
                        color:red;
                    text-shadow: 2px 2px 8px red; 


                }


                    
                }

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
                    color:green;
                    text-shadow: 2px 2px 8px green; 


                }

            }

        }

    



        p{

            color:white;

        }




`