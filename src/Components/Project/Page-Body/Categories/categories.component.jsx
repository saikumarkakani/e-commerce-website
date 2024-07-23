import '../Categories/categories.component.css';
import Electronics from '../../../../Assests/Images/electronics1.webp';
import Fashion from '../../../../Assests/Images/Fashion.webp';
import home from '../../../../Assests/Images/home.webp';
import garden from '../../../../Assests/Images/garden.webp';
import sports from '../../../../Assests/Images/sports.webp';
import care from '../../../../Assests/Images/care.webp';
import kids from '../../../../Assests/Images/kids.webp';
import New from '../../../../Assests/Images/new.webp';
import New1 from '../../../../Assests/Images/new1.webp';
import New2 from '../../../../Assests/Images/new2.webp';
import New3 from '../../../../Assests/Images/new3.webp';
import New4 from '../../../../Assests/Images/new4.webp';
import pic from '../../../../Assests/Images/boximg.webp';
import pic2 from '../../../../Assests/Images/box1img.webp';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";





export function MyCategories() {

    return (
        <div className='Categories-gap' >


            <div class="container">
                <div>
                    <h2><b class='Categories-style'>Categories</b></h2>
             
                </div>
                <FaChevronLeft style={{marginLeft:"800px"}} />
                <FaChevronRight style={{marginLeft:"10px"}} />
            </div>
           
         
            <hr></hr>
    
            <br></br>
            <br></br>
              <div style={{padding:"10px"}}>
            <div className='cate-style'>

                <div class="categories">
                    <ul>
                        <li>
                            <img src={Electronics} alt="Category 1" />
                            <h6><b>Electronics</b></h6>
                        </li>
                        <li>
                            <img src={Fashion} alt="Category 2" />
                            <h6><b>Fashion</b></h6>
                        </li>
                        <li>
                            <img src={home} alt="Category 3" />
                            <h6><b>Home & Living</b></h6>
                        </li>
                        <li>
                            <img src={garden} alt="Category 3" />
                            <h6><b>Garden & Outdoors</b></h6>
                        </li>
                        <li>
                            <img src={sports} alt="Category 3" />
                            <h6><b>Sports & Fitness</b></h6>
                        </li>
                        <li className='img-side'>
                            <img src={care} alt="Category 3" />
                            <h6><b>Personal Care & Beauty</b></h6>
                        </li>
                        <li>
                            <img src={kids} alt="Category 3" />
                            <h6><b>Kids & Babies</b></h6>
                        </li>

                    </ul>
                </div>

            </div>
            <br></br>
            <br></br>

            <div className='space'></div>

            <div>

                <div class="card cards-style card11">
                    <div class="row">
                        <div class="col">
                            <label className='lock-box'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                                </svg>
                            </label>
                            <label>
                                <h6><b className='box-text'>Secure Payment Gateways</b></h6>
                                <legend className='small'> Partnered with 48+ gateways for your safety</legend>
                            </label>

                            <label className='lock-box1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                                </svg>
                            </label>
                            <label>
                                <h6><b className='box-text'>Customer Reviews</b></h6>
                                <legend className='small'>Verified reviews are featured in our platforms</legend>
                            </label>

                            <label className='lock-box2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                            </label>
                            <label>
                                <h6><b className='box-text'>30 Day No-Hassle Return</b></h6>
                                <legend className='small'>We guarantee happiness, If you’re not return it</legend>

                            </label>
                            <label className='gap'></label>

                            <label className='lock-box3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </label>
                            <label>
                                <h6><b className='box-text'>24/7 Customer Support</b></h6>
                                <legend className='small'>
                                    24/7 Customer Support
                                    Questions? Our support team is available 24/7</legend>

                            </label>
                        </div>

                    </div>


                </div>



            </div>

            <br></br>
            <div className='d-flex'>
                <div className='New-Image-Box'>
                    <img src={New} className='New-Image'></img>
                </div>
                <div className='New-Image-Box'>
                    <img src={New1} className='New-Image'></img>
                </div>
                <div className='New-Image-Box'>
                    <img src={New2} className='New-Image'></img>
                </div>
                <div className='New-Image-Box'>
                    <img src={New3} className='New-Image'></img>
                </div>
                <div className='New-Image-Box'>
                    <img src={New4} className='New-Image'></img>
                </div>
            </div>
            </div>
           

            <div className='gap'></div>

        </div>

    );
}