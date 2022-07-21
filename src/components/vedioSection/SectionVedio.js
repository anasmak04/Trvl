import React, { Component } from 'react';
import "./Section.css"
function SectionVedio (){

        return (
            <div className='container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='infos'>
        <h1>adventure awaits</h1>
        <h2>what are you waiting for ?</h2>
      </div>
      <div className='btns'>
        <button>get started</button>
        <button>get started</button>
      </div>
            </div>
        );
    }


export default SectionVedio;