import '../Page-Body/pagebody.component.css';
import jbl from '../../../Assests/Images/jbl.webp';
import image2 from '../../../Assests/Images/electronics.webp';
import girl from '../../../Assests/Images/girl.webp';


export function PageBody() {

    return (

        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4 width">
                <div className='d-flex'>
                    <div class="col card-color card14">
                        <div>
                            <div className='text-content'>
                                <label>
                                    <span><h6>NOVEMBERS GADGET MADNESS</h6></span>
                                    <h2>20% OFF</h2>
                                    <div class="btn_wrapper mt-4">
                                        <a><button className='button1'>GET Offer</button></a>
                                    </div>
                                </label>
                                <img alt="image" src={jbl} class="box-image" />
                            </div>
                        </div>
                    </div>

                    <div class="col card-color2 card15">
                        <div>
                            <div>
                                <label className='text-content1'>
                                    <h6><b>HOME APPLIANCES</b></h6>
                                    <label><h1><b>CYBER MONDAY SPECIAL</b></h1> </label>
                                   
                                </label>
                                <img alt="image" src={image2} class="box-image2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide carouselBox">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div>
                    <label >

                        <div>
                            <h5 className='Carousel-text'>WINTER 2024 OFFER</h5>
                            <div class="carousel-text1">
                                <div><b className='Carousel-text1'>Grab the best</b></div>
                                <div><b className='Carousel-text1'>fashion deals</b></div>
                                <div><b className='Carousel-text1'>In This Winter</b></div>
                                <div>
                                </div>
                                <div class="btn_wrapper mt-4">
                                    <a><button className='button2'><b>Get Deals</b></button></a>
                                </div>
                            </div>
                            <div class="carousel-item active CarouselImage  ">
                                <img src={girl} class="d-block element.style " alt="image" style={{width:'448px', height:'634px'}}/>
                            </div>
                            <div class="carousel-item CarouselImage">
                                <img src={girl} class="d-block element.style  " alt="image" style={{width:'448px', height:'634px'}}/>
                            </div>

                        </div>


                    </label>

                </div>


            </div>







        </div>
    );
}