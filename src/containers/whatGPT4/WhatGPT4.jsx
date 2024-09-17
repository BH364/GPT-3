import React from 'react'
import Feature from '../../components/feature/Feature'
const WhatGPT4 = () => {
  return (
    <div className='px-20 py-14 text-white shadow-custom-shadow bg-[#043a70] max-650:m-4 max-550:max-w-full max-550:m-1 max-550:p-2' id='wgpt3'> 
      <div className='flex mt-[0.5rem] max-350:my-[1rem] max-350:min-w-[100%]'>
        <Feature index='1' textSize='24px' title='What is GPT3?' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='flex flex-row justify-between items-center mt-16 mb-8 mx-0 max-850:flex-col max-850:mb-[0rem]'>
        <h1 className='bg-gradient-text bg-clip-text text-transparent font-manrope max-w-[510px] leading-[45px] font-extrabold text-[34px] max-850:flex-col max-850:items-start max-850:mb-[0rem] max-650:text-[28px] max-650:leading-[40px]'>The possibilities are beyond your imagination</h1>
        <p className='font-manrope font-medium text-[16px] leading-[30px] text-[#FF8A71] cursor-pointer max-850:mt-4'>Explore the Library</p>
      </div>
      <div className='flex flex-wrap flex-row'>
      <Feature  index='2' textSize='24px' title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
      <Feature  index='2' textSize='24px' title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      <Feature index='2' textSize='24px' title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatGPT4