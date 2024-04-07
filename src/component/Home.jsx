import React from 'react';
import home from "../assets/home.png"

function Home() {
  return (
  <div className='home'>
      <div className='container'>
        <div className='content'>
        <p className='title'>launching soon</p>
        <h1 className='sub-title'>An NFT like no other</h1>
        <p className="title-description">Don't miss out on the release of our new NFT. Sign up below to
        recieve updates when we go live.</p>
        <button>Sign up</button>
      </div>
   
      <div className='image-container'>
        <div className='image'>
          <img src={home} alt="home" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse pink"></div>
          <div className="ellipse orange"></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home