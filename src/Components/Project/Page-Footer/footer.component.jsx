import '../Page-Footer/footer.component.css';
import React from 'react'
import project from '../../../Assests/Images/logo2-3601699785184.png';
import { Button } from 'bootstrap';
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { BsPersonWheelchair } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";


export function MyFooter() {
    return (
        <div>
            <footer>

                <div class="container">
                    <div class="row">
                        <div class="col" style={{padding:'30px'}}>
                            <label className='image'>
                                <img src={project} style={{width:'200px', height:'50px'}}></img>
                            </label>
                            <br></br>
                            <br></br>
                            <div>
                                The best multi-vendor ecommerce website for you. You can easily buy your product according to your choice.
                            </div>
                            <br></br>
                            <div className='footer-logos'>
                                <li className="li-styles logs-box"><SiTwitter style={{height:"22", width:"23" }} /></li>
                                <li className="li-styles logs-box"><SiFacebook style={{height:"22", width:"23" }} /></li>
                                <li className="li-styles logs-box"><BsPersonWheelchair style={{height:"22", width:"23" }}/></li>

                                <li className="li-styles logs-box"><FaInstagram  style={{height:"22", width:"23" }}/></li>
                            </div>
                        </div>
                        <div class="col">
                            <h4 style={{marginLeft:'-50px'}} className='heading-style'>Helpful Links</h4>
                            <ul>
                                <li className='footer-list heading-small-style'>Home</li>
                                <li className='footer-list heading-small-style'>Blog</li>
                                <li className='footer-list heading-small-style'>Contact</li>
                                <li className='footer-list heading-small-style'>Shop Page</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h4 style={{marginLeft:'-50px'}} className='heading-style'>Store Info</h4>
                            <ul>
                                <li className='footer-list heading-small-style'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>&nbsp;London Street</li>
                                <li className='footer-list heading-small-style'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                                    <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z" />
                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                </svg>&nbsp;563826524</li>
                                <li className='footer-list heading-small-style'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>&nbsp;sai384851gmail.com</li>

                            </ul>

                        </div>
                        <div class="col">
                            <h5 style={{marginLeft:'-4px'}} className='footer-get'>GET IN TOUCH</h5>
                            <br></br>
                            <p className='heading-small-styles'>Sign up to our mailing list now!</p>

                            <div class="search-container">
                                <input type='text' placeholder='Your Mail Here..' class='Search-style'></input>
                                <button class='send-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <hr></hr>

                <span className='last-style'> © 2024 All right reserved by Bytesed MN </span>

            </footer>

        </div>

    )
}






