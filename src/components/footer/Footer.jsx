import React, { useState } from 'react';
import "./Footer.css";
function footer () {
    
        return (
            <div>
                <div className="footer-container">

                <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
                <p>You can unsubscribe at any time.</p>
                <div className='footer-contact'>
                    <input type="text" alt='input' />
                    <button>subscribe</button>
                </div>

                
                
                </div>

            </div>
        );
    
}

export default footer;