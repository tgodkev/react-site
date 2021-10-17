import React from 'react'
import 'src/App.css'
import { Button } from './Button'
import 'src/components/HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-container'>
              <video src='src/Video/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                Get Started
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
            
        </div>
    )
}
