
import Gift1 from "../../../Assets/Images/gift1.svg"
import Gift2 from "../../../Assets/Images/gift2.svg"
import Gift3 from "../../../Assets/Images/gift3.svg"
import "./quality.css"
 const Quality =()=>{
     return(
        <section class="quality">
        
            <div class="container">

                <div class="quality__box">


                    <div class="quality__inner">

                        <h2 class="quality__title">Why choose us?</h2>


                        <p class="quality__text">
                            A large part of our role is choosing which particular coffees will be featured 
                            in our range. This means working closely with the best coffee growers to give 
                            you a more impactful experience on every level.
                        </p>

                    </div>

                    <ul class="quality__list">

                        <li class="quality__item">

                            <a href="https://www.lavazza.ru/" target="blank">
                                <img class="quality__img" src={Gift1} alt=" coffee bean"/>
                            </a>


                            <h3 class="quality__reason">
                                <a class="quality__link" href="https://www.lavazza.ru/" target="blank">Best quality</a>
                            </h3>

                            <div class="quality__content">

                                <p class="quality__article">
                                    Discover an endless variety of the world’s best artisan coffee from each of our     roasters.
                                </p>

                            </div>

                        </li>

                        <li class="quality__item">

                            <a href="https://www.fedex.com/" target="blank">
                                <img class="quality__img" src={Gift2} alt="a beatiful present"/>
                            </a>


                            <h3 class="quality__reason">
                                <a class="quality__link" href="https://www.fedex.com/" target="blank">Exclusive     benefits</a>
                            </h3>

                            <div class="quality__content">

                                <p class="quality__article">
                                    Special offers and swag when you subscribe, including 30% off your first shipment.
                                </p>

                            </div>

                        </li>

                        <li class="quality__item">

                            <a href="https://www.amazon.com/" target="blank">
                                <img class="quality__img quality__img--truck" src={Gift3} alt="a little broun     track"/>
                            </a>


                            <h3 class="quality__reason">
                                <a class="quality__link" href="https://www.amazon.com/" target="blank">Free shipping</a>
                            </h3>

                            <div class="quality__content">

                                <p class="quality__article">
                                    We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
                                </p>

                            </div>

                        </li>

                    </ul>

                </div>

            </div>
        
       </section>
     )
 }

 export default Quality;