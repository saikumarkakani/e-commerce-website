import '../Registration/Registration.component.css';


export function RegistrationPage() {
    return (
        <div className='body'>


            <div className='form'>
                <h3 className='text-color'>REGISTRATION FORM</h3>
                <br></br>
                <div className='text-color'>
                    <label><b>Full Name </b></label>
                    <input type='text' placeholder='Full Name' className='form-control' />

                </div>
                <div className='text-color'>
                    <label><b>Uer Name </b></label>
                    <input type='text' placeholder='User Name' className='form-control' />
                </div>
                <div className='text-color'>
                    <label><b>Email </b></label>
                    <input type='text' placeholder='email' className='form-control' />
                </div>
                <div className='text-color'>
                    <label><b>Password </b></label>
                    <input type='password' placeholder='Password' className='form-control' />
                </div>
                <br></br>
                <div>
                    <button className='btn button-color'><b>Registration </b></button>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}