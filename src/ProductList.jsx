import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function ProductList() {
    const [list,setList]=useState([])
    useEffect(()=>async()=>{
        let res = await axios.get('http://localhost:5000/api/menu-items/')
        setList(res.data)
    },[])
    return (
    <>
    <div className='flex'>
        {list?.map((item,index)=>{
            return(<div key={index} className='gap-3 flex'>
                <Card data={item}/>
            </div> )
        })}
    </div>
    </>
  )
}
