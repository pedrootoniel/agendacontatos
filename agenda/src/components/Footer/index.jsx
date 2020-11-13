import React from 'react';
import { FooterStyled } from './style';



// import { Container } from './styles';

function Footer() {
  return(
    <FooterStyled>

    <div className="footer">

    <p><i class="fas fa-code"> TODOS OS DIREITOS RESERVADOS <i class="fas fa-code"></i></i></p>

    <div className="social-icons">
      <a href="https://www.facebook.com/pedro.otoniel.13/" target="_blank" className="fb"><i className="fab fa-facebook-f"></i></a>
      
      <a href="#" target="_blank" className="twitter"><i className="fab fa-twitter"></i></a>
      
      <a href="https://www.instagram.com/pedrootonieldev/" target="_blank" className="insta"><i className="fab fa-instagram"></i></a>
      
      <a href="https://youtube.com/pedrootoniel" target="_blank" className="yt"><i className="fab fa-youtube"></i></a>
    </div>


    </div>



    </FooterStyled>




  )
}

export default Footer;