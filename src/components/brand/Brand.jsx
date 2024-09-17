import React from 'react';
import {google,slack,atlassian,dropbox,shopify} from './import'
const Brand = ()=>{
    return (
        <div className='py-16 px-24 flex flex-wrap justify-center items-center'>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
           <img src={google} alt='google'/>
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
           <img src={slack} alt='slack'/>
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
           <img src={atlassian} alt='atlassian'/>
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
           <img src={dropbox} alt='dropbox'/>
        </div>
        <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
           <img src={shopify} alt='shopify'/>
        </div>
        </div>
    )
}
export default Brand;