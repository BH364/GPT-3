import React from 'react';

const CTA = () =>{
    return (
        <div className='flex justify-between items-center flex-row p-8 m-20 rounded-[1rem] bg-gradient-text max-650:flex-col max-550:my-[4rem] max-550:mx-[2rem] ' id="cta">
            <div>
          <p className='font-manrope font-medium text-[12px] leading-[30px] text-[#0E0E0E]'>Request Early Access to Get Started</p>
          <h3 className='font-manrope font-extrabold text-[24px] leading-[45px] text-[#000000] max-550:text-[18px] max-550:leading-[28px]'>Register Today and start exploring the endless possibilities.</h3>
            </div>
            <div className='flex justify-center items-center ml-[2rem] max-650:mt-[2rem] max-550:ml-0'>
                <button type='button' className='bg-[#000000] rounded-[40px] text-white font-bold font-manrope text-[18px] leading-[30px] py-[0.5rem] px-[1rem] outline-none cursor-pointer min-w-[150px] max-550:text-[14px] max-550:leading-[28px]'>Get Started</button>
            </div>
        </div>
    )
}
export default CTA;