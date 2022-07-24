import React, { Component } from 'react';
import "./Home.css"
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="hero-containe2">
                <h1>Check out these EPIC Destinations!</h1>
                <div className="parent">
                    <div className="box">
                        <div className="box-img">

                        </div>
                        <div className="text">
                        <p>explore the hidden waterful deep inside the amazon jungle</p>

                        </div>
                        </div>

                        <div className="box">
                        <div className="box-img box-img2">
                         </div>                       
                        <div className="text">
                        <p>travel through the islands of bali in a private cruise</p>

                        </div>                    
                            </div>
                            
                        </div>

                        <div className="parent-child">
                    <div className="child">
                    <div className="child-image child-image1"></div>
                    <div className='child-text'>
                        <p>set sail in the athletic ocean visiting uncharted waters </p>
                    </div>
                    </div>
                    <div className="child">
                    <div className="child-image child-image2"></div>
                    <div className='child-text'>
                        <p>experience footbal on top of the himilayan mountains</p>
                    </div>
                    </div>
                    <div className="child last">
                    <div className="child-image child-image3"></div>
                    <div className='child-text'>
                        <p>ride through the sahara desert on the guided camel tour</p>
                    </div>
                    </div>
                </div>
                </div>
          
            </div>
        );
    }
}

export default Home;