
import Logo from "../../../Assets/Images/footer-logo.svg"
import Facebook from "../../../Assets/Images/facebook.svg"
import Twitter from "../../../Assets/Images/twitter.svg"
import Instagram from "../../../Assets/Images/instagram.svg"

import "./footer.css"

 const Footer = ()=>{
     return(
        <div class="container">
        
        <div class="footer">
            
            <div class="footer__left">
                
                <a class="footer__logo" href=""><img  src={Logo} alt="logotip"/></a>
                
                <nav class="footer__nav">
                    
                    <ul class="header__list">
                        
                        <li class="header__item footer__item--left">
                            <a class=" footer__link" href="./index.html">HOME</a>
                        </li>
                        
                        <li class="header__item footer__item">
                            <a class="footer__link" href="./index.html">ABOUT US</a>
                        </li>
                        
                        <li class="header__item footer__item">
                            <a class="header__link footer__link" href="./index.html">CREAT YOUR PLAN</a>
                        </li>
                        
                    </ul>
                    
                </nav>
            </div>
       
            <div class="footer__right">
       
                <ul class="footer__social">
       
                    <li class="footer__roster footer__rosret--left">
       
                        <a  href="https://www.facebook.com/" target="blank">
                            <img  src={Facebook} alt="logo of facebook"/>
                        </a>
       
                    </li>
                    
                    <li class="footer__roster">
       
                        <a  href="https://ria.ru/" target="blank">
                            <img  src={Twitter} alt="logo of twitter"/>
                        </a>
       
                    </li>
       
                    <li class="footer__roster">
       
                        <a  href="https://www.instagram.com/" target="blank">
                            <img  src={Instagram} alt="logo of instagram"/>
                        </a>
       
                    </li>
       
                </ul>
       
            </div>
            
        </div>
             
       </div>
     )
 }
 export default Footer;