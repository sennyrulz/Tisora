import React from 'react'
import cardImg from '../assets/heroImage.webp'

const BrandTopic = () => {
  return (
    <div className='container-Brand-Topic mt-5 pt-5 px-5'>
      <h3 className='text-start pt-5 px-5 mb-4'>BRAND TOPIC</h3>
        <div className='col-lg-8 bg-white d-flex flex-row Brand-Topic mx-5' >
          <img className='brandImg' style={{height: "550px"}} src={cardImg} alt="" />
            <p className='text-lg-start pt-3 justify-text' style={{margin:"110px 70px"}}>Incidunt sunt tempora itaque beatae nisi corporis doloremque assnda. cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda, cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda. </p>
        </div>

        <div className='col-lg-4 p-2 px-5'>
          <button className='Btn-Brand-Topic bg-black text-white border'>Learn more</button>
        </div>       
    </div>
  )
}

export default BrandTopic
