import React from 'react'
import cardImg from '../assets/heroImage.webp'

const BrandTopic = () => {
  return (
    <div className='container-Brand-Topic mt-5 pt-5 px-5'>
        <h3 className='text-start pt-5 px-5 mb-4'>BRAND TOPIC</h3>

        <div className='bg-white d-flex flex-row Brand-Topic mx-5' style={{width:'1600px'}}>
            <img style={{height: "550px"}} src={cardImg} alt="" />
            <p className='text-lg-start pt-3 justify-text' style={{margin:"100px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda, cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda, cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda, cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt tempora itaque beatae nisi corporis doloremque assumenda, cum quasi eligendi dicta laboriosam est cumque odit autem hic alias quae minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <button className='Btn-Brand-Topic bg-black text-white p-2 px-5 border' style={{width: '375px', marginTop: '-70px'}}>Choose Options</button>
    </div>
  )
}

export default BrandTopic
