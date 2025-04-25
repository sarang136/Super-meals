import React, { useContext } from 'react'
import { ChevronDown } from 'lucide-react';
import UserConText from '../Utils/UserContext';

const Footer = () => {

    const {fullNameOfUser} = useContext(UserConText)
    return (
        <div className='containerOfFooter'>
            <div className='footer-container'>
                <div className='logoFooter'>
                    <img src='https://images-platform.99static.com/ydocSZMPbCuCOxA5hNQLJLs10jY=/500x500/top/smart/99designs-contests-attachments/2/2478/attachment_2478256' />
                    <p>© 2025 Super Meals Limited</p>

                    <p id='temp30'> User : <span style={{fontStyle:"italic",     color: "gray"}}>{fullNameOfUser}</span></p>
                </div>

                <div className='CompanyContainer commonMargin'>
                    <h1 id='temp20'>Company</h1>
                    <h1 id='temp21'>About Us</h1>
                    <h1 id='temp21'>Careers</h1>
                    <h1 id='temp21'>Hotels</h1>
                    <h1 id='temp21'>Mart</h1>
                    {/* <h1 id='temp21'></h1> */}
                </div>

                <div className='contactUs commonMargin'>
                    <h1 id='temp20'>Contact</h1>
                    <h1 id='temp21'>Help & Support</h1>
                    <h1 id='temp21'>Partner with us</h1>
                    <h1 id='temp21'>Ride with us</h1>
                    <h1 id='temp21'>Mart</h1>
                </div>

                <div className='Availabe commonMargin'>
                    <h1 id='temp20'>Availabe in</h1>
                    <h1 id='temp21'>Bangalore</h1>
                    <h1 id='temp21'>Gurgaon</h1>
                    <h1 id='temp21'>Hyderabad</h1>
                    <h1 id='temp21'>Delhi</h1>
                    <h1 style={{ border: "1px solid #ebebeb,", fontSize: "15px", padding: "0px 5px", borderRadius: "10px" }} id='temp21'>More 69 cities 👇</h1>

                </div>

                <div className='Life at Swiggy commonMargin'>
                    <h1 id='temp20'>Life at Super Meals</h1>
                    <h1 id='temp21'>Explore With Super Meals</h1>
                    <h1 id='temp21'>News</h1>
                    <h1 id='temp21'>Snackables</h1>
                    {/* <h1 id='temp21'>Delhi</h1> */}
                    {/* <h1 style={{border:"1px solid #ebebeb,", fontSize:"15px", padding:"0px 5px", borderRadius:"10px"}} id='temp21'>More 69 cities 👇</h1> */}

                </div>

            </div>
            <p className='copyright'>&copy; {new Date().getFullYear()} Super Meals. All rights reserved.</p>
        </div>
    )
}

export default Footer;