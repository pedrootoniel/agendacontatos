import styled from 'styled-components'

export const ListStyled = styled.div`

        display:flex;
        flex-wrap:wrap;

        .container-list{
            a{
                text-decoration:none;
                color:white;
                }

            color:white;
            font-size:18px;
            width:250px;
            height:200px;
            background:#333;
            display:flex;
            flex-direction:column;
            margin:20px 20px 20px 20px;
            border-radius:15px;
            align-items:center;
            justify-content:center;
            



            strong{
                background-image: url('http://i.imgur.com/suugW7P.gif');
                font-size:20px;

            }

            &+div{
                margin-right:20px;
                margin-left:0px;

            }


            }





`