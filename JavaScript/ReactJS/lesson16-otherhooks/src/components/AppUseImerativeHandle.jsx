import React, { forwardRef, useImperativeHandle, useRef } from 'react'


const MyInput = forwardRef((porps,ref)=>{
    useImperativeHandle(ref,()=>({
            hello:hi
    }))
    const hi = ()=>{
        alert('hello')
    }
    return(
        <input type="text"  />
        )
    })



    
    // =======================================================================
    const AppUseImerativeHandle = () => {
        
        const inputRef = useRef();
        const test =()=>{inputRef.current.hello()}

  return (
    <div>
          <MyInput ref={inputRef} />  <button onClick={test}>test</button>        
    </div>
  )
}

export default AppUseImerativeHandle