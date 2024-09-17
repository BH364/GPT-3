import React from 'react';
import Article from '../../components/article/Article.jsx'
import {blog01,blog02,blog03,blog04,blog05} from './import'
const Blog = ()=>{
    return (
        <div className='mx-24 my-16 flex flex-col max-700:m-8'>
        <div className='width-full text-left mb-20'>
          <h1 className='bg-gradient-text bg-clip-text text-transparent font-manrope font-extrabold text-[62px] leading-[75px] tracking-tighter max-550:text-[34px] max-550:leading-[42px] max-700:text-[46px] max-700:leading-[52px]'>A lot is happening,
          We are blogging about it.</h1>
        </div>
        <div className='flex flex-row max-990:flex-col-reverse '>
          <div className='flex-[0.75] mr-8 max-990:my-8 max-990:mx-0'>
              <Article  index='40' imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-4 max-700:grid-cols-1'>
          <Article index='' imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article index='' imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article index='' imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article index='' imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>

          </div>
        </div>
        </div>
    )
}
export default Blog;