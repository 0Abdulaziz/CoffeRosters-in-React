import number1 from "../../../Assets/Images/01.png"
import number2 from "../../../Assets/Images/02.png"
import number3 from "../../../Assets/Images/03.png"
import "./deliver.css"
const Deliver = ()=>{
    return(
        
 <section class="deliver">

     <div class="container">
        
         <h2 class="deliver__title">How it works</h2>    
        
         <div class="deliver__content">
             <span class="deliver__circle deliver__circle--left"></span>

             <span class="deliver__circle deliver__circle--middle" ></span>

             <span class="deliver__circle deliver__circle--right" ></span>
         </div>
        
         <ol class="deliver__list">

             <li class="deliver__item ">

                 <img class="deliver__img" src={number1} alt="number one"/>

                 <h3 class="deliver__text">Pick your coffee</h3>

                 <div class="deliver__wrap deliver__wrap--left">

                     <p class="deliver__info">
                         Select from our evolving range 
                         of artisan coffees. Our beans 
                         are ethically sourced and we 
                         pay fair prices for them. There 
                         are new coffees in all profiles every month for you to try out.
                     </p>

                 </div>
             </li>

             <li class="deliver__item">

                 <img class="deliver__img" src={number2} alt="number two"/>

                 <h3 class="deliver__text">Choose the frequency</h3>

                 <div class="deliver__wrap deliver__wrap--middle">
                     <p class="deliver__info">
                         Customize your order frequency, quantity, even your roast style 
                         and grind type. Pause, skip or cancel your subscription with 
                         no commitment through our online portal.
                     </p>
                 </div>
             </li>

             <li class="deliver__item">

                 <img class="deliver__img" src={number3} alt="number three"/>             

                 <h3 class="deliver__text">Receive and enjoy!</h3>

                 <div class="deliver__wrap deliver__wrap--right">
                     <p class="deliver__info">
                         We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                         world-class coffees curated to provide a distinct tasting experience.
                     </p>
                 </div>
             </li>

         </ol>
        
        
         <div class="hero__wrap">

             <a class=" deliver__button hero__button" href="">Create your plan</a>

         </div>
        
     </div>
        
        
        
    </section>
 )
}
export default Deliver;