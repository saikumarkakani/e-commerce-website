
import { useEffect, useState } from 'react';


import '../editProfile/editprofile.component.css';





export function EditProfile() {

const [user, setuser] = useState([]);

useEffect(()=>{
    getuser()
},[])

function getuser() {
    
let data = localStorage.getItem("userData");
setuser(JSON.parse(data)[0]);



}



    return (
        <div>
        
            <div className='about-color'>
                <h1 className='about'>Update Profile</h1>

            </div>
            <br></br>
            <br></br>

            <div className='edit-body'>


                <form className='edit-forms'  method='post' action='http://localhost:4002/updateUserData'>
                    <h3 className='text-color' style={{ marginRight: '200px', fontSize: '30px' }}>Update Profile</h3>
                    <br></br> 
                   
                    <div className='text-color'>
                    <input type='hidden' name='Id' defaultValue={user.Id}></input>
                        <input type='text' placeholder='Full Name' className='form-control' name="Name" defaultValue={user.Name}/>
                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='number' placeholder='phone Number' className='form-control' name="PhoneNumber" defaultValue={user.PhoneNumber}/>
                        
                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='email' placeholder='email' className='form-control' name="Email" defaultValue={user.Email}/>
                     

                    </div>
                    <br></br>
                    <div className='text-color'>

                        <select className='form-control' name="Country" defaultValue={user.Country} >


                            <option value="">Select Your Country</option>
                            <option value="United States of America">United States of America</option>
                            <option value="China">China</option>
                            <option value="Japan">Japan</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="France">France</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Italy">Italy</option>
                            <option value="Canada">Canada</option>
                        </select>
                     
                    </div>
                    <br></br>
                    <input type='checkbox'></input>&nbsp;<b style={{ color: 'rgb(116, 114, 114)' }}> Accept all<span className='terms-style'> Terms and Conditions</span> & <span className='terms-style'>Privacy Policy</span></b>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <button type="submit" className='btn edit-button'>Update</button>
                       
                    </div>
                    <br></br>
                  
                </form>
            </div>    


        </div>
    );
}