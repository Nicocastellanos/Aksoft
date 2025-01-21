import React from 'react'
import cover from '../assets/img/cover/hero-img.png'

export default function Cover() {
  return (
    <div className='container-cover'>
        <div className='img-cover'>
            <img src={cover} alt="cover"/>
        </div>
        <div className='title'>
        <p>Somos una empresa de tecnologia</p>
        </div>
  
    </div>
  )
}
