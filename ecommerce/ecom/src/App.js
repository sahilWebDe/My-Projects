import './App.css';
import React, { useEffect, useState } from'react';
import Category from './Category';
import axios from 'axios';


function App() {

  let [finalcat,setFinalCat]=useState([]);
  let[finalproduct,setFinalProduct]=useState([]);
  let[catname,setCatname]=useState('');

  let getcat=()=>{
    axios.get('https://dummyjson.com/products/categories')
   .then(res=>res.data)
   .then(finalres=>{
    setFinalCat(finalres)
   })

  }

  let getproduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then(resp=>resp.data)
    .then(finres=>{
    setFinalProduct(finres.products);
      
    })
  }

  useEffect(()=>{
    getcat(); 
    getproduct();
  },[])

  useEffect(()=>{
    if(catname!==''){
      
      axios.get(`https://dummyjson.com/products/categories/${catname}`)
      .then(resp=>resp.data)
      .then(finres=>{
      setFinalProduct(finres.products);
    })
    .catch(err=>{
      console.error(`Error fetching product by category ${catname}`,err);
    }); 
    
  }
  },[catname])

  let pitem=finalproduct.map((products,index)=>{
    return(
      <Productitem key={index} pdata={products}/>
    )

  })

  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-center text-[30px] font-bold mb-[20px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-[lightgrey] pl-[10px]'> 
            
            <Category finalcat={finalcat} setCatname={setCatname}/>
          </div>

          <div className='grid grid-cols-3 gap-4'>
           { finalproduct.length>=1?
            pitem
            :
            'Loading...'}
          
          </div>

          <div>
        </div>
      </div>
    </div>
  </div>

  </>
 
  
  );
}

export default App;

function Productitem({pdata}){ 
  console.log(pdata);
return (
  
  <div className='shadow-lg text-center pb-[4px] cursor-pointer'>
  <img src={pdata.thumbnail}></img>
  <h4>{pdata.title}</h4>
  <b>€{pdata.price}</b>
</div>
)
}