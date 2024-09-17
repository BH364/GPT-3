import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='px-24 py-16 flex flex-col justify-center items-center bg-[#043a70] max-550:px-4 max-550:py-4'>
      <div className='w-[100%] text-center mb-[3rem]'>
        <h1 className='bg-gradient-text bg-clip-text text-transparent font-manrope text-[64px] font-extrabold leading-[70px] max-550:text-[35px] max-550:leading-[40px]'>Do you want to step in to the future before others</h1>

      </div>
      <div className='flex justify-center items-center p-4 border border-white text-center cursor-pointer'>
        <p className='box-border text-[18px] leading-[21px] text-white font-manrope max-550:text-[14px] max-550:leading-[20px]'>Request Early Access</p>
      </div>
      <div className='flex justify-between flex-wrap items-start flex-row w-full text-left my-20 max-850:my-20'>
        <div className='flex flex-col mr-20 max-550:my-4'>
           <img src={gpt3Logo} className='w-[118px] h-[30px] mb-[1rem]'/>
           <p className='font-manrope text-[12px] leading-[18px] text-white'>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className='w-[250px] flex justify-start flex-col max-550:my-4 max-550:mx-0'>
        <h4 className='font-manrope text-[14px] leading-[40px] text-white max-550:mx-0'>Links</h4>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Overons</p>
          <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Social Media</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Counters</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Contact</p>
        </div>
        <div className='w-[250px] flex justify-start flex-col max-550:my-4 max-550:mx-0 max-850:mt-10'>
        <h4 className='font-manrope text-[14px] leading-[40px] text-white max-550:mx-0'>Company</h4>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Trems & Conditions</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Privacy Policy</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Contact</p>
        </div>
        <div className='w-[250px] flex justify-start flex-col max-550:my-4 max-550:mx-0 max-1050:mt-8'>
        <h4 className='font-manrope text-[14px] leading-[40px] text-white max-550:mx-0'>Get in touch</h4>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>Crechterwoord k12 182 DK Alknjkcb</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>085-132567</p>
        <p className='font-manrope text-[12px] leading-[14px] text-white cursor-pointer my-[0.5rem] mx-0 max-550:mx-0'>info@payme.next</p>
        
        </div>
        <div className='mt-20 text-center w-full'>
          <p className='font-manrope text-[12px] leading-[14px] text-white mt-[0.5rem]'>@2021 GPT-3. All rights reserved.</p>
        </div>
      
      </div>
      </div>
      )
}

      export default Footer;