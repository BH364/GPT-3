import React from 'react'
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='mx-24 my-16 flex flex-row max-990:flex-col max-650:mx-8' id='possibility'>
      <div className='flex-1 flex justify-start items-center mr-[1rem] max-990:my-4 max-990:mx-0'>
        <img src={possibilityImage} className='w-[100%] h-[100%]' alt="possibility" />
      </div>
      <div className='flex-1 flex flex-col justify-end items-start max-990:mt-8'>
        <h4 className='font-manrope font-medium leading-[30px] text-[16px] text-[#71E5FF]'>Request Early Access to Get Started</h4>
        <h1 className='bg-gradient-text my-4 mx-0 bg-clip-text text-transparent text-[34px] font-extrabold leading-[45px] font-manrope'>The possibilities are
        beyond your imagination</h1>
        <p className='font-manrope text-[16px] leading-[30px] text-[#81AFDD]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className='text-[#FF8A71] mt-4'>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;