
import '../Contact/contact.component.css';
import { BsTelephoneInbound } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { LuClock } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";


export function Contact() {
    return (
        <div>
            
            <div className='about-color'>
                <h1 className='about'>Contact</h1>
                <div className='about-small'>Contact</div>
            </div>
            <br></br>
            <br></br>

            <div class="container">
                <div class="row">
                    <div class="Contact-col">
                        <div className='Contact-with-us'>Contact with us</div>
                        <br></br>
                        <div>
                            <label className='Contact-icons'>
                            <BsTelephoneInbound  style={{height:"20px", width:"20px"}}/>
                            </label>&nbsp;&nbsp;&nbsp;<label className='Contact-with-us-text'>Call us:</label>
                            <div className='Contact-with-us-smalltext'>+012 789654321</div>
                        </div>
                        <br></br>
                        <div>

                            <label className='Contact-icons1'>
                            <BsEnvelope style={{height:"24px", width:"22px"}}/>
                            </label>&nbsp;&nbsp;&nbsp;<label className='Contact-with-us-text'>Email us:</label>
                            <div className='Contact-with-us-smalltext'>company@mail.com</div>

                        </div>
                        <br></br>

                        <div>
                            <div>
                                <label className='Contact-icons2'>
                                <LuClock style={{height:"24px", width:"25px"}}/>
                                </label>&nbsp;&nbsp;&nbsp;<label className='Contact-with-us-text'>
                                    Service Hour:</label>
                                <div className='Contact-with-us-smalltext'>10.00 am - 08.00 pm</div>

                            </div>
                        </div>
                        <br></br>

                        <div>
                            <div>
                                <label className='Contact-icons1'>
                                
                                <GrLocation style={{height:"28px", width:"25px"}} />
                                </label>&nbsp;&nbsp;&nbsp;<label className='Contact-with-us-text'>Address:</label>
                                <div className='Contact-with-us-smalltext'>2779 Rubaiyat Road, Traverse City, MI 49684</div>

                            </div>
                            <div></div>
                        </div>



                    </div>
                    <div class="Contact-col2">
                        <div className='Get-in-Touch'>Get in Touch</div>
                        <br></br>
                        <form>
                        <div>Your Name</div>
                        <input type='text' placeholder='Your Name' className='form-control contact-form'></input>
                
                        <br></br>
                        <div>Your Email</div>
                        <input type='email' placeholder='Your Email' className='form-control contact-form'></input>
            
                        <br></br>
                        <div>Your Subject</div>
                        <input type='text' placeholder='Your Subject' className='form-control contact-form'></input>

                        <br></br>
                        <div>Your Message</div>
                       <textarea placeholder='Your Message' className='form-control contact-textarea' >

                       </textarea>
                       <br></br>
                       <br></br>
                

                    <button className='btn contact-button'>Submit</button>
                       </form>
                    </div>
                
                    
                </div>

            </div>






            
        </div>
    );
}