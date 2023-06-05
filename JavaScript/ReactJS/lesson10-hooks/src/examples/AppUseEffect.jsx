import {useEffect, useState} from 'react'

const AppUseEffct = () => {

    const [text,setText] = useState("Hello ");
    const [textOne,setTextOne] = useState("Hello One");

    useEffect(()=>{
        console.log('useEffect is running');
    },[textOne,text]);


  return (
    <div className='container my-5'>
            <h1>{text}</h1>
            <button onClick={()=>{setText("Bye")}}>change</button>
            <hr />
            <h1>{textOne}</h1>
            <button onClick={()=>{setTextOne("Bye One")}}>change one</button>
    </div>
  )
}

export default AppUseEffct