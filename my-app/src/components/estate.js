import React from 'react'
import './estate.css'
import Image8 from '../onImages/image8.png'
import Image9 from '../onImages/image9.png'


const estate =()=> {
  return (
    <div>
        <div className='estate'>
            <div className='fram-247'>
            <img src={Image9} alt='#' className='details'></img>
            </div>
            <div className='sale'>
                 <img src={Image8} alt='#' className='back'></img>
            </div>
            <div className='real-e'>
                <div className='capital'>
                    <text>Aspects that make Delight Capital Solutions India's leading Real Estate Advisory</text>
                </div>
                <div className='provide'>
                    <text>You can leave it to us to provide your dream home the perfect decor and design which it deserves.</text>
                </div>
            </div>
        </div>
    </div>
  )
}

export default estate;
