import React, { useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [data,setData] = useState('hi');

    useLayoutEffect(()=>{
        // alert('test')
        setData('hello')
    },[]);
    
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default AppUseLayoutEffect