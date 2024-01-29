import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Server() {

    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/")
        .then((res)=>setDatas(res.data));
    },[]);

    let val = datas.map((item)=>{
        return (
            <>
        <p key={item.id}>{item.userName}</p>
        <p key={item.id}>{item.passWord}</p>
        </>
        )
    })
  return (
    <div>
        <h1>User Datas</h1>
        <div>
            {val}
        </div>
    </div>
  )
}
