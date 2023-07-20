import React, { useRef, useState } from 'react'

const AppUseRef = () => {
    const [data, setData] = useState(null);
    const inputRef = useRef();
    return (
        <div>
            <h1>{data}</h1>
            <input type="text" ref={inputRef} /><button
                onClick={() =>{ setData(inputRef.current.value);
                    console.log(inputRef.current.value);
                }}
            >show</button>
        </div>
    )
}

export default AppUseRef