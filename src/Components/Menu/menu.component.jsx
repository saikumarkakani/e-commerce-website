import '../Menu/menu.component.css';
import amazon from '../../Assests/Images/Amazon-Logo-Black.jpg';
import { Link } from 'react-router-dom';



export function MyMenu() {
    return (
        <div>
            <nav className='navebar'>
                <img src={amazon} className='image-style'></img>
                <input type='text' placeholder='Search Here...!' className='search'></input>
                <label className='search-button'>
                    <button className='btn'>Search</button>
                </label>
                <label className='button'>
                   
                        <Link to="/Login"> <button className='btn'> Login</button></Link> 
                </label>
                <label className="button1">

                    <button className='btn'>SignUp</button>
                </label>
                <div className='menu'>
                    <ul>
                       <li className='menu-items'>HOME

                            <ul className='sub-menu'>
                                <li>SHOPPING</li>
                                <li>DEALS</li>
                                <li>MINI TV</li>
                                <li>AMAZON PAY</li>
                            </ul>
                        </li>
                        
                        <li className='menu-items'>PRODUCTS</li>
                        <li className='menu-items'>MOBILES</li>
                        <li className='menu-items'>ELECTRONICS</li>
                        <li className='menu-items'>SELL</li>
                        <li className='menu-items'>TODAY DEALS</li>
                        <li className='menu-items'>OFFERS</li>
                    </ul>
                </div>

            </nav >

        </div >
    );

}