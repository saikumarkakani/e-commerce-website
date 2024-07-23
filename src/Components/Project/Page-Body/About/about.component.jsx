import '../About/about.component.css';
import React from "react";
import Slider from "react-slick";

import aboutPic1 from '../../../../Assests/Images/about-pic1.png';
import aboutPic2 from '../../../../Assests/Images/aboutpic2.png';
import aboutPic3 from '../../../../Assests/Images/aboutpic3.png';
import truck from '../../../../Assests/Images/Screenshot (108).png';
import leg from '../../../../Assests/Images/Screenshot (109).png';
import screen1 from '../../../../Assests/Images/screen1 (1).png';
import screen2 from '../../../../Assests/Images/screen1 (2).png';
import Emastone from '../../../../Assests/Images/emma-stone.jpeg';
import Emawatson from '../../../../Assests/Images/emma-watson.jpg';
import Natasha from '../../../../Assests/Images/Natasha.jpeg';
import galgadot from '../../../../Assests/Images/galgadot.jpeg';
import brielarson from '../../../../Assests/Images/brielarson.jpeg';
import jenniferaniston from '../../../../Assests/Images/jennifer aniston.jpeg';




export function MyAbout() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (

        <div>
            <div className='about-color'>
                <h1 className='about'>About</h1>
                <div className='about-small'>about</div>
            </div>
            <br></br>
            <br></br>

            <div>
            <div class="row" style={{padding:'70px'}}>
                    <div class="col">
                        <label className='about-text'><b>This is how we do. Learn something about us and our services</b></label>
                        <br></br>
                        <br></br>
                        <div className='about-text-small'>
                            <label>There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.</label>
                            <br></br>
                            <br></br>
                            <label className='about-text-small2'>Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.
                                fasdkfjlasdjflkajldsfjlkadsjlfjaldjflkajdlfj</label>
                            <br></br>
                            <br></br>
                            <label className='about-content'>
                                <label>fadsfkhaksdfhkjahsdkfhakjsdhfkahdskj</label>
                                <br></br>
                                <br></br>
                                <label>fadskjfhkasdjhfkjhasdkjfha</label>
                                <br></br>
                                <br></br>
                                <label>fadsfkhaksdfhkjahsdkfhakjsdhfkahdskj</label>
                                <br></br>
                                <br></br>
                                <label>fadskjfhkasdjhfkjhasdkjfha</label>

                            </label>

                        </div>
                    </div>
                    <div class="col">
                        <label >
                            <img src={aboutPic1} alt='image' className='about-pic-one'></img>
                        </label>
                    </div>
                </div>
            </div>

            <div className='about-gap'></div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <label>
                            <img src={aboutPic2} alt='image' className='about-pic-second'></img>
                        </label>
                    </div>
                    <div class="col">
                        <label className='about-text1'><b>We Provide Express & secure home delivery</b></label>
                        <br></br>
                        <br></br>
                        <label className='about-text-small'>
                            <label >here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.</label><br></br><br></br>
                            <label>Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity</label>
                        </label>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="container cont-res-body">
                <div class="row">
                    <div class="col">
                        <label className='about-text1'><b>Our Advantages</b></label>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div>
                            <div class="row res-box">
                                <div class="col-logs">
                                    <img src={truck} alt='image' className='leg'></img>
                                </div>
                                <div class="col-logs">
                                    <label className='freeshop'><b>Free Shipping</b></label><br></br>
                                    <label className='freeshope-text'>Free Shopping on all online order</label>
                                </div>
                                <div class="col-logs">
                                    <img src={leg} alt='image' className='leg'></img>

                                </div>
                                <div class="col-logs">
                                    <label className='freeshop'><b>100% Secure Payment</b></label><br></br>
                                    <label className='freeshope-text'>We Ensure Secure Transections</label>
                                </div>
                            </div>
                            <br></br>

                            <div class="row res-box">
                                <div class="col-logs">
                                    <img src={screen1} alt='image' className='leg'></img>
                                </div>
                                <div class="col-logs">
                                    <label className='freeshop'><b>Fresh Product</b></label><br></br>
                                    <label className='freeshope-text'>We provide 100% Original item</label>
                                </div>
                                <div class="col-logs">
                                    <img src={screen2} alt='image' className='leg'></img>

                                </div>
                                <div class="col-logs">
                                    <label className='freeshop'><b>24/7 Support Center</b></label><br></br>
                                    <label className='freeshope-text'>We are available in 24 hours</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <label>
                            <img src={aboutPic3} alt='image' className='about-pic-three'></img>
                        </label>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <div>
                <h1 style={{ marginLeft: '50px' }}>Client Says</h1>
            </div>
            <hr></hr>


            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box" style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={Emastone} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: '#726a6a', fontStyle: 'italic' }}>Emma Stone</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box" style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={Natasha} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: '#726a6a', fontStyle: 'italic' }}>Natasha</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box" style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={Emawatson} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: '#726a6a', fontStyle: 'italic' }}>Emma Watson</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box"  style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={galgadot} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: ' #c9c6c6;', fontStyle: 'italic' }}>Gal Gadot</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box" style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={brielarson} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: '#726a6a', fontStyle: 'italic' }}>Brie Larson</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card box-card1">
                            <p class="card-header head-box" style={{backgroundColor:'#f0efef'}}>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.</p>
                            <div className="center-image">
                                <img src={jenniferaniston} alt="Placeholder" />
                            </div>
                            <div class="card-body foot-box">
                                <div>
                                    <p class="card-text" style={{ fontSize: '23px', color: '#726a6a', fontStyle: 'italic' }}>Jennifer Aniston</p>
                                    <p className='foots-small-text'>Student, Oxford University</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>












        </div>
    );
}







