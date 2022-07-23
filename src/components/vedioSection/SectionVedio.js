import React, { Component } from 'react';
import "./Section.css"
function SectionVedio (){

        return (
       


<div className='hero-container'>
<video src='/videos/video-1.mp4' autoPlay loop muted />
<h1>ADVENTURE AWAITS</h1>
<p>What are you waiting for?</p>
<div className='btns'>
        <button>get started</button>
        <button>get started</button>
      </div>
</div>
        );
    }


export default SectionVedio;