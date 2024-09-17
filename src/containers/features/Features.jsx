import React from 'react'
import Feature from '../../components/feature/Feature'
 const featuresData=[
    {
        title:'Improving end distrusts instantly',
        text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        title:'Become the tended active',
        text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
    },
    {
        title:'Message or am nothing',
        text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
    },
    {
        title:'Really boy law county',
        text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
    },

 ];
const Features = () =>{
    return (
        <div className='mx-24 my-16 max-w-full flex text-white max-990:flex-col max-650:mx-8' id='features'>
         <div className='flex flex-col items-start justify-start flex-1 text-left mr-[3rem] max-990:mt-0 max-990:mr-0 max-990:mb-[2rem] max-990:ml-0'>
            <h1 className='bg-gradient-text bg-clip-text text-transparent font-manrope text-[34px] font-bold leading-[34px] max-550:text-[28px] max-550:leading-[38px]'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
            <p className='text-[#FF8A71] text-[16px] mt-[2rem] leading-[30px]'>Request Early Access to Get Started</p>
         </div>
         <div className='flex flex-col items-center justify-start'> 
            {featuresData.map((item,index)=>(
                <Feature index='1' textSize='18px' title={item.title} text={item.text} key={item.title+index}/>
            ))}

         </div>
        </div>
    )
}
export default Features;