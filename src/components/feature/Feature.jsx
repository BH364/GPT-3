import React from 'react';

const Feature = ({index,textSize, title, text }) => {
  return (
    <div className={index==='1' ? 'w-full flex-row flex justify-between items-start m-4 max-550:my-4 max-550:mx-0 max-650:flex-col' : 'w-full min-w-[210px] flex-1 flex  flex-col justify-between items-start m-4 max-550:my-4 max-550:mx-0 max-350:my-[1rem] max-350:max-w-full'} style={{display:index==='1'?'flex':'unset'}}>
      <div className='max-w-[180px] flex-1 mr-8'>
        <div className='w-[38px] h-[3px] shadow-custom-shadow mb-[0.25rem] bg-gradient-text' /> 
        <h1 className={`font-manrope font-extrabold leading-[24px] tracking-tighter max-550:text-[14px] max-550:leading-[22px]`} style={{fontSize:textSize}}>{title}</h1>
      </div>
      <div className={index==='1'?'max-w-[400px] flex flex-grow max-650:mt-[0.5rem]': 'max-w-[390px] flex flex-grow mt-[0.5rem]'}>
        <p className='font-manrope font-medium text-[#81AFDD] text-[15px] leading-[24px] max-550:text-[12px] max-550:leading-[20px]'>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
