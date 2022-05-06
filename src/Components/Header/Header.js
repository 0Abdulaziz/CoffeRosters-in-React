import cofferLogo from "../../Assets/Images/coffee-logo.svg"
import "./header.css"       
const Header = ()=>{
    return(
    <header>
        
        <div class="header">
            
            <h1 class="visually-hidden">coffeeroaster</h1>
            
            <div class="container">
                
                <div class="header__top">
                    
                    <a class="header__logo" href="./index.html">
                        
                        <img className="header__img" src={cofferLogo} alt="logotip of coffeeroaster"/>
                        
                    </a>
                    
                    
                    <nav class="header__nav">
                        
                        <ul class="header__list">
                            <li class="header__item"><a class="header__link" href="#">HOME</a></li>
                            <li class="header__item"><a class="header__link" href="#">ABOUT US</a></li>
                            <li class="header__item"><a class="header__link" href="#">CREATE YOUR PLAN</a></li>
                        </ul>
                        
                    </nav>
                    
                </div>     
                
            </div>
            
        </div>
    </header>
    )
}
export default Header;
