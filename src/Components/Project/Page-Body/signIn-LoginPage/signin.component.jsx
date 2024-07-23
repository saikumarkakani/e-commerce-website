
import { useForm } from 'react-hook-form';
import { MyFooter } from '../../Page-Footer/footer.component';
import { WebPage } from '../../webpage';
import '../signIn-LoginPage/login.component.css';




export function SignUpPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div>
            
            <div className='about-color'>
                <h1 className='about'>Register</h1>

            </div>
            <br></br>
            <br></br>

            <div className='bodyy'>


                <form className='forms2' id='regForm' method='post' action='http://localhost:4002/saveUser' onSubmit={handleSubmit(() =>document.getElementById("regForm").submit() )}>
                    <h3 className='text-color' style={{ marginRight: '200px', fontSize: '30px' }}>Create Account</h3>
                    <br></br>
                    <div className='text-color'>

                        <input type='text' placeholder='Full Name' className='form-control' name="Name"
                          {...register('Name', {
                            required: 'Full Name is required',
                            minLength: 3,
                            maxLength: 40,
                            pattern: /^[A-Za-z\s]+$/i // Allow alphabets and spaces
                        })}
                        />
                        <div>
                            {
                                errors.Name && errors.Name.type === "required" ? <p style={{ color: 'red' }}>Name Field is required </p> :
                                    errors.Name && errors.Name.type === "minLength" ? <p style={{ color: 'red' }}>Enter Atlest 3 characters </p> :
                                        errors.Name && errors.Name.type === "maxLength" ? <p style={{ color: 'red' }}>Not Allowed more than 40 characters  </p> :
                                            errors.Name && errors.Name.type === "pattern" ? <p style={{ color: 'red' }}>Name Should be Alphabet</p> : ""
                            }
                        </div>

                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='number' placeholder='phone Number' className='form-control' name="PhoneNumber"

                            {...register('PhoneNumber', {
                                required: 'Phone Number',
                                pattern: {
                                    value: /^(?!0|1|2|3|4|5)\d{10}$/,

                                }
                            })}
                        />
                        <div>
                            {errors && errors.PhoneNumber && (
                                <span style={{ color: 'red' }}>Phone Number must be a valid 10-digit number</span>
                            )}
                        </div>
                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='email' placeholder='email' className='form-control' name="Email"

                            {...register('Email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,

                                }
                            })}
                        />
                        <div>
                            {errors && errors.Email && (
                                <span style={{ color: 'red' }}>Email must be a valid email address</span>
                            )}
                        </div>

                    </div>
                    <br></br>
                    <div className='text-color'>

                        <select className='form-control' name="Country"
                            {...register('Country', {
                                required: 'Country selection is required'
                            })}
                        >


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
                        <div>
                            {errors && errors.Country && (
                                <span style={{ color: 'red' }}>{errors.Country.message}</span>
                            )}
                        </div>
                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='password' placeholder='Password' className='form-control' name="Password"
                            {...register('Password', {
                                required: 'Password is required',
                                minLength: { value: 6 }
                            })}
                        />
                        <div>
                            {errors && errors.Password && (
                                <span style={{ color: 'red' }}>Password must be at least 6 characters</span>
                            )}
                        </div>

                    </div>
                    <br></br>
                    <div className='text-color'>

                        <input type='password' placeholder='confirm Password' className='form-control'/>
                        

                    </div>
                    <br></br>
                    <input type='checkbox'></input>&nbsp;<b style={{ color: 'rgb(116, 114, 114)' }}> Accept all<span className='terms-style'> Terms and Conditions</span> & <span className='terms-style'>Privacy Policy</span></b>
                    <br></br>
                    <br></br>
                    <div>
                        <button className='btn button-colors2'><b>Create Account</b></button>

                    </div>
                    <br></br>
                    <div>
                        <div>
                            <span className='alredyAcc-style'>Already Have account?</span>&nbsp; &nbsp;<span className='alredyAcc-style2'><b>Sign in</b></span>
                        </div>

                    </div>

                </form>
            </div>

        


        </div>
    );
}