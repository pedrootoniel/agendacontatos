/*STYLE FROM HEADER */

import styled from 'styled-components'

export const HeaderStyled = styled.div`

/* HEADER DO PROJETO */
.container-header{

    display:flex;
    align-items:center;
    height: 100px;
    background-color: #333;

}

/* IMAGEM LOGO */

img{

    background-sizing:cover;
    margin: 20px;


}
/* MENUS DO PROJETO*/

.nav{
    display:flex;
   justify-content:center;
   align-items:center;
    margin-left: 768px;
    height:100px;
    

    a{
    height:100px;
    font-size:25px;    
    text-decoration:none;
    color:white;
    margin:30px;
    padding-top:50px;
    
    
    
    &:hover{
        padding:1px;
       
        
        height: 50px;
        text-shadow: 0 0 25px green, 0 0 5px green;

    }

    }

}
.fixedcallicon {
	background:white;
    color: black;
    position: fixed;
    top: 33%;
    right: 0;
    width: 90px;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    display: inline-block;
    z-index: 99;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all 1s ease;
    background-image: url('http://i.imgur.com/suugW7P.gif');
}

.fixedcallicon i {width:60px;height:60px;text-align:center;}
.fixedcallicon:hover {width:220px;background:rgba(245, 228, 25, 0.5);}



`


