import React from 'react';
import ReactDOM from 'react-dom';

const Article = ({index,imgUrl,date,title})=>{
    return (
        <div className={`w-[100%] h-[100%] flex flex-col bg-[#043a70]  ${index ? `max-700:min-w-[100%]` : ''} ${index ? `max-990:max-w-[48%]` : ''}`}>
        <div className='w-[100%] h-[100%] bg-[#043a70] max-700:max-h-[150px] max-990:h-[250px]'>
          <img src={imgUrl} className='w-[100%] h-[100%]' alt="blog image"/>
        </div>
        <div className='flex flex-col justify-between py-[1rem] px-[1.5rem] h-[100%]'>
            <div>
                <p className='font-bold text-[11.649] leading-[35px] text-white'>{date}</p>
                <h3 className='font-manrope font-extrabold text-[25.11px] leading-[30px] text-white mb-[5rem] cursor-pointer max-550:text-[18px] max-550:leading-[25px]'>{title}</h3>
            </div>
            <p className='cursor-pointer text-white font-bold text-[12px]'>Read Full Article</p>
        </div>
            </div>
    )
}
export default Article;