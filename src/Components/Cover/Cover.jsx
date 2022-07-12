import React from 'react';
import "./Cover.css";
import cover_video from '../../media/cover_video.mp4';

export const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={cover_video} autoPlay loop muted/>
        <h1>ALAN GRINTU</h1>
        <p>DESAROLLAMOS TUS SUEÑOS</p>
    </div>
  )
}
