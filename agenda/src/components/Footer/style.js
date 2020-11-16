/* STYLE FROM FOOTER */


import styled from 'styled-components'

export const FooterStyled = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:150px;
    margin-top:90%;
    background-color:#333;

    .footer{
    display:flex;
    flex-direction:column;
    align-items:center;   
    justify-content:center;
     

    }

    p{
    margin-bottom:60px;    
  
     color:yellow;
     font-size:25px;
     
     &:hover{

        text-shadow: 0 0 3px #FF0000;

     }

    }

    .social-icons{
    margin: 1px 0 15px 0;
  }
  .social-icons a{
    position: relative;
    height: 40px;
    width: 50px;
    margin: 0 10px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 50%;
  }
  .social-icons a:hover::before,
  .icon:hover::before,
  .buttons button:hover:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff,
                inset 3px 3px 5px #ceced1;
                
  }

.social-icons a i{
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 40px;
}
.social-icons a.fb i{
  color: #4267B2;
}
.social-icons a.twitter i{
  color: #1DA1F2;
}
.social-icons a.insta i{
  color: #E1306C;
}
.social-icons a.yt i{
  color: #ff0000;
}




`