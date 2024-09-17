import React from 'react';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div id='home' className='lg:py-16 lg:px-24 text-white flex flex-row max-1050:flex-col max-700:my-0 max-550:mx-0'>
       <div className='flex-1 flex justify-center items-start flex-col mr-5 max-1050:mt-0 max-1050:ml-[3rem] max-1050:mb-[3rem]'>
        <h1 className='text-[62px] font-extrabold leading-[75px] tracking-[-0.04em] text-left bg-gradient-text bg-clip-text text-transparent font-manrope max-700:text-[48px] max-700:leading-[60px] max-550:leading-[38px] max-550:text-[24px]'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p className='font-manrope text-[20px] font-normal leading-[27px] text-[#81AFDD] mt-[1.5rem] max-700:text-[16px] max-700:leading-[24px] max-550:text-[14px] max-550:[24px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachement. Party we years to order allow asked of.

        </p>
        <div className='flex flex-row max-1050:ml-20 max-700:ml-0'>
          <input
            type='email'
            placeholder='Your Email Address'
            className='w-full mt-8 ml-4 bg-[#0c233b] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[5px] min-h-[50px] text-[20px] leading-[27px] py-2 px-8 border-2 border-solid border-[#052D56] outline-none placeholder:text-gray-400 max-700:text-[16px] max-700:leadng-[24px] max-550:text-[12px] max-550:leading-[16px] max-w-lg:px-16'
          />


          <button
            type='button'
            className='bg-[#FF4820] rounded-tl-[0px] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[0px]  font-bold w-1/2 mt-8 min-h-[50px] text-[20px] leading-[27px] max-700:text-[16px] max-700:leadng-[24px] '
          >
            Get Started
          </button>


        </div>
        <div className='w-full flex justify-start items-center mt-8 max-700:ml-0 max-700:flex-col max-700:leading-[24px] max-1050:ml-30 max-w-lg:px-12'>
          <img src={people} alt='people' className='w-[181.79px] h-[38px]'/>
          <p className='font-manrope font-medium leading-[38px] text-[12px] ml-4 text-center max-700:leading-[22px] max-700:m-0'>1,600 people requested access to visit in the last 24 hours</p>
        </div>
        </div>
        <div className='flex-1 flex justify-center items-center '>
          <img src={ai} alt='ai' className='w-[100%] h-[100%]' />
        </div>
      </div>
    
  )
}

export default Header;