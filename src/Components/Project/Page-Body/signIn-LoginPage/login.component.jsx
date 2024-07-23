import '../signIn-LoginPage/signin.component.css';

import fblogo from '../../../../Assests/Images/fb-logo-removebg-preview.png';
import Googlelogo from '../../../../Assests/Images/google-logo-removebg-preview.png';

import { getUser } from '../../../../Services/users.service';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Store from '../../../../Services/Storages/reduxstore.service';
import { setLocalStorageItem } from '../../../../Services/Storages/local.storage';



export function LoginPage() {

const navigate = useNavigate();

//ref variable
const nameRef = useRef();
const passwordRef = useRef();


    function getRegisterData() {

        const Name = nameRef.current.value;
        const Password = passwordRef.current.value;

        getUser().then((res) => {

            let filterData = res.data.filter((item) =>

                item.Name == Name && item.Password == Password

            );
            if (filterData.length > 0) {
                setLocalStorageItem("userData", filterData);
                let action = {type:"login", data:filterData};
                Store.dispatch(action)
                alert("Login Succesfully...");
                navigate("/Dashboard");
                
            }
            else {
                alert("User Not Found...");
            }


        })
            .catch((ex) => {
                alert(ex.message)
            })

    }


  


    return (
    
        <div>    
        
            <div className='about-color'>
                <h1 className='about'>Sign In</h1>

            </div>
            <br></br>
            <br></br>



            <div className='bodys1'>


                <div className='forms1' id="signForm">
                    <h3 className='text-colors1' style={{ marginRight: '230px', fontSize: '32px' }}>Sign In</h3>
                    <br></br>
                    <div className='text-colors1'>
                        <label><b>Email Or User Name </b></label>
                        <input type='text' placeholder='test_user' className='form-control' ref={nameRef}
                          />

                    

                    </div><br></br>

                    <div className='text-colors1'>
                        <label><b>Password </b></label>
                        <input type='password' placeholder='********' className='form-control' ref={passwordRef}
                             />
                      

                    </div>
                    <br></br>
                    <div>
                        <button className='btn button-colors1' onClick={()=>{getRegisterData()}}><b>Sign In</b></button>

                    </div>
                    <br></br>
                    <input type='checkbox' style={{ marginLeft: '40px' }}></input>&nbsp;&nbsp;<span>Remember Me</span><span className='forgetPass'>Forget Password</span>
                    <br></br>
                    <br></br>

                    <div className='Or'>Or</div>
                    <br></br>
                    <div>
                        <span className='face-box'>
                            <img src={Googlelogo} className='fblogos' alt='img'></img>&nbsp;Login With Google</span>&nbsp;&nbsp;
                        <span className='face-box'> <img src={fblogo} className='fblogos' alt='img'></img>&nbsp;Login With Face Book</span>
                    </div>
                </div>

            </div>
           

</div>




    );
}