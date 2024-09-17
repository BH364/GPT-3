import React,{useState} from 'react';
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Navbar = ()=>{
    const [toggleMenu,setToggleMenu]=useState(false);
    return (
        <div className='w-full flex justify-between items-center py-8 px-24 max-1050:px-8 max-700:py-8 max-700:px-16 max-550:p-8'>
            <div className='flex-1 flex justify-start items-center text-white'>
                <div className='mr-6'>
                    <img src={logo} alt="logo" className="w-[62.56px] h-[16.02px]"/>
                </div>
                <div className='flex flex-row font-manrope max-1050:hidden'>
                <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-0 mx-4'><a href='#home'>Home</a> </p>
                 <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-0 mx-4'><a href='#wgpt3'>What is GPT?</a> </p>
                 <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-0 mx-4'><a href='#possibility'>Open AI</a> </p>
                 <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-0 mx-4'><a href='#features'>Case Studies</a> </p>
                 <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-0 mx-4'><a href='#blog'>Library</a> </p>
                </div>
                
            </div>
            <div className='text-white flex items-center font-manrope max-550:hidden'>
                <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-1 mx-4'>Sign In</p>
                <button type='button' className='py-[0.5rem]  px-4 left-[1153px] top-[45px] bg-red-500 rounded-[5px] outline-none border-none'>Sign Up</button>
            </div>
            <div className='ml-4 hidden relative max-1050:flex'>
              {toggleMenu
              ?<RiCloseLine color='#fff' size={27} onClick={()=>{ setToggleMenu(false)}} /> 
             : <RiMenu3Line color='#fff' size={27} onClick={()=>{ setToggleMenu(true)}} /> 
             }
             {toggleMenu && (
                <div className='animate-scale-up-center flex flex-col right-0 min-w-[210px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] p-8 top-[40px] mt-4 rounded-md bg-customBlue text-white absolute items-end max-550:top-5'>
                    <div className='flex flex-col block '>
                    <p className='capitalize cursor-pointer my-2'><a href='#home'>Home</a> </p>
                    <p className='capitalize cursor-pointer my-2'><a href='#wgpt3'>What is GPT?</a> </p>
                    <p className='capitalize cursor-pointer my-2'><a href='#possibility'>Open AI</a> </p>
                    <p className='capitalize cursor-pointer my-2'><a href='#features'>Case Studies</a> </p>
                    <p className='capitalize cursor-pointer my-2'><a href='#blog'>Library</a> </p>
                  </div>
                  <div className='flex flex-col font-manrope max-700:hidden max-1050:hidden max-550:block'>
                      
                       <p className='font-medium text-[17px] leading-[25px] capitalize cursor-pointer my-2'>Sign In</p>
                       <button type='button' className='py-[0.5rem]  px-4 left-[1153px] top-[45px] bg-red-500 rounded-[5px] outline-none border-none'>Sign Up</button>
                        </div>
                        </div>
            
             )}
            </div>
        </div>
    )
}
export default Navbar;