import { Link, useNavigate } from "react-router-dom";
import { AuthRoute } from "../../../../Services/Storages/authRoute";

import "../DashBoard/dashboard.component.css";
import Store from "../../../../Services/Storages/reduxstore.service";
import { BsPersonCircle } from "react-icons/bs";



export function DashBoard() {

const navigate = useNavigate();

    // function userLogOut(){
    //     let action = {type: "login", data: null};
    //     Store.dispatch(action);
    //     alert("Logout Succesfully...")
    //     navigate("/");
    // }

    function logOut(){
        let action = {type: "login", data: null}
        Store.dispatch(action);
        alert("Logout Succesfully...");
        navigate("/");
        
    }

    return (
        <AuthRoute>
            
            <div className='about-color'>
                <h1 className='about'><b>User Dashboard</b></h1>

            </div>
            <br></br>
            <br></br>
            <div>


                <div class="dash-row">
                    <div class="col-4">


                        <div className="dashboard-1">
                            <div class="Tony-table">
                                <div class="Tony-row" style={{ backgroundColor: "rgb(88, 179, 240)" }}>
                                    <div class="Tony-cell" style={{ color: "white" }}>
                                    <BsPersonCircle style={{height:"25px", width:"25px"}}/>&nbsp;&nbsp;<span>Tony Stark</span>


                                    </div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Dashboard</div>
                                </div>
                                <div class="Tony-row">
                                   <Link to='/edit' style={{ textDecoration: 'none' }}><div class="Tony-cell">Edit Profile</div></Link> 
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Change Password</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">My Orders</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Chat List</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Refund Request</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Wallet history</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Shipping Address</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell">Support Tickets</div>
                                </div>
                                <div class="Tony-row">
                                    <div class="Tony-cell" onClick={()=>{logOut()}}>Logout</div>
                                </div>

                            </div>
                        </div>

                    </div>




                    <div class="col-8">
                        <div>
                            <div className="d-flex">
                                <div class="card dash-card" style={{ width: "26rem" }}>
                                    <div class="dash-card-body">
                                        <div style={{ marginTop: "30px" }}>
                                            <span className="dsh-card-logo"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                            </svg></span>
                                            <label className="dash-text">Total Orders<br></br>
                                                <span className="zero">0</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="card dash-card" style={{ width: "26rem", marginLeft: "20px" }}>
                                    <div class="dash-card-body">
                                        <div style={{ marginTop: "30px" }}>
                                            <span className="dsh-card-logo"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                            </svg></span>
                                            <label className="dash-text">Support Tickets<br></br>
                                                <span className="zero">4</span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>


                            <div class="dash-container">

                                <table class="table table-bordered dash-table" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#580</td>
                                            <td>March 19, 2024</td>
                                            <td><label class="pending">Pending</label></td>
                                            <td>$140.00</td>
                                            <td><label class="dash-view">view details</label></td>
                                        </tr>
                                        <tr>
                                            <td>#580</td>
                                            <td>March 19, 2024</td>
                                            <td><label class="pending">Pending</label></td>
                                            <td>$140.00</td>
                                            <td><label class="dash-view">view details</label></td>
                                        </tr>
                                        <tr>
                                            <td>#580</td>
                                            <td>March 19, 2024</td>
                                            <td><label class="pending">Pending</label></td>
                                            <td>$140.00</td>
                                            <td><label class="dash-view">view details</label></td>
                                        </tr>
                                        <tr>
                                            <td>#580</td>
                                            <td>March 19, 2024</td>
                                            <td><label class="pending">Pending</label></td>
                                            <td>$140.00</td>
                                            <td><label class="dash-view">view details</label></td>
                                        </tr>
                                        <tr>
                                            <td>#580</td>
                                            <td>March 19, 2024</td>
                                            <td><label class="pending">Pending</label></td>
                                            <td>$140.00</td>
                                            <td><label class="dash-view">view details</label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

        </AuthRoute>
    );
}