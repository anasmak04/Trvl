import React, { useState } from 'react';
import "./Footer.css";
function footer () {
    
        return (
            <div>
                <div className="footer-container">

                <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
                <p>You can unsubscribe at any time.</p>
                <div className='footer-contact'>
                    <input type="text" alt='input' placeholder="Your Email"/>
                    <button>subscribe</button>
                </div>

                <div className="list">
                <ul>

                    <li>About Us</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Terms of Service</li>
                </ul>
              




                <ul>
                    <li>Contact Us</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </ul>
             
               <ul>
                  <li>Videos</li>
                  <li>Submit Video</li>
                  <li>Ambassadors</li>
                  <li>Agency</li>
                  <li>Influencer</li>
                </ul>




           <ul>
                    <li>Social Media</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>


              
                </ul>
                
                </div>

                <div className="fotter-list">
                    <div className='y-footer'>
                        <h1>trvl</h1>
                    </div>

                    <div className='x-footer'>
                        <p>TRVL © 2020</p>
                    </div>

                    <div className='icone'>
                    <i className="fa fa-linkedin fa-2x"></i>
                    <i className="fa fa-instagram fa-2x"></i>
                    <i className="fa fa-twitter fa-2x"></i>
                    <i className="fa fa-facebook-square fa-2x"></i>
                    </div>

                </div>
                
                </div>
            </div>
        );
    
}

export default footer;