import React from 'react';
import './App.js';

export default function Category({finalcat,setCatname}) {

    let cat=finalcat.map((v,i)=>{
        return( <li key={i} onClick={()=>setCatname(v.name)} className='py-[6px] cursor-pointer text-[18px] font-serif font-[100] mb-[2px]'>{v.name}</li>
        )
    })
  return (
    <div>
        <h3 className='text-[20px] font-bold '>Category</h3>

        <ul>
            {cat} 
        </ul>
    </div>
  )
}
