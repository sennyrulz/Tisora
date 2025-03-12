import React from 'react'
import cardImg from '../assets/model.jpg'

const Card = () => {
  return (
    <div className='singleCard p-3 px-3 border border-1 mx-3 shadow-sm'>
      <div className='text-start bg-white ' style={{ width: '375px', height: '600px' }}>
        <img src={cardImg} alt="card Img" className="cardImg img-fluid" />
          <div>
            <h3 className='px-3 py-1'>Product Name</h3>
            <p className='px-3'>N250,000</p>
            <button className='Btn-Option bg-white p-2 px-5 border' style={{width: '375px'}}>
              Choose Options
            </button>
          </div>
          
      </div>
          
    </div>
  )
}

export default Card
