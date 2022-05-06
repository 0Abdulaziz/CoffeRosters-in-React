import Collection1 from "../../../Assets/Images/collection1.png"
import Collection2 from "../../../Assets/Images/collection2.png"
import Collection3 from "../../../Assets/Images/collection3.png"


import "./collection.css"

const Collections =()=>{
    return(
        <section class="collection">
        
        <div class="container">
            
            <div class="collection__inner"> 
                
                <ul class="collection__list">
                    
                    <li class="collection__item">
                        
                        <a  href="https://www.lavazza.ru/" target="blank">
                            <img class="collection__img" src={Collection1}  alt="Gran Espresso coffee"/>
                        </a>
                        
                        <div class="collection__content">
                            
                            <h2 class="collection__title">
                                <a class="collection__link" href="https://www.lavazza.ru/" target="blank"> Gran Espresso</a>
                            </h2>
                            
                            <p class="collection__text">
                                Light and flavorful blend with cocoa and black pepper for an intense experience
                            </p>
                            
                        </div>
                        
                    </li>
                    
                    
                    <li class="collection__item">
                        
                        <a  href="https://www.redber.co.uk/" target="blank"> 
                            <img class="collection__img"src={Collection2} alt="BRAZIL SANTOS - Medium-Dark Roast Coffee"/>
                        </a>
                        
                        <div class="collection__content">
                            
                            <h2 class="collection__title">
                                <a class="collection__link"  href="https://www.redber.co.uk/" target="blank">Planalto</a>
                            </h2>
                            
                            <p class="collection__text">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                            
                        </div>
                        
                    </li>
                    
                    
                    <li class="collection__item">
                        
                        <a  href="https://www.guide2coffee.com/" target="blank"> 
                            <img class="collection__img" src={Collection3} alt="Coffee Masters Whole Bean Coffee"/>
                        </a>
                        
                        <div class="collection__content">
                            
                            <h2 class="collection__title">
                                <a class="collection__link"  href="https://www.guide2coffee.com/" target="blank">Piccollo</a>
                            </h2>
                            
                            <p class="collection__text">
                                Mild and smooth blend featuring notes of toasted almond and dried cherry
                            </p>
                            
                        </div>
                        
                    </li>
                    
                    
                    
                    <li class="collection__item">
                        
                        <a  href="https://v-hub.vollers.com/" target="blank">
                            <img class="collection__img" src={Collection3}/>
                        </a>
                        
                        <div class="collection__content">
                            
                            <h2 class="collection__title">
                                <a class="collection__link"  href="https://v-hub.vollers.com/" target="blank">Danche</a>
                            </h2>
                            
                            <p class="collection__text">
                                Ethiopian hand-harvested blend densely packed with vibrant fruit notes
                            </p>
                            
                        </div>
                        
                    </li>
                    
                </ul>
                
            </div>
            
        </div>
        
    </section>
    )
}
export default Collections;