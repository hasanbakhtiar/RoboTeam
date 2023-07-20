import React, { useMemo, useState } from 'react'
import user from '../data/data';

const AppUseMemo = () => {
    const [count, setCount] = useState(0);
    const [userId, setUserId] = useState(null);


    const userRows = () => {

        console.log('userrows is running');

        return user.map(item => (
            <li onClick={() => { setUserId(item.email) }} key={item.id}>{item.name}</li>
        ))
    }

    const userRowsData = useMemo(()=>{return userRows()},[userId]);
    return (
        <div>
            {userId}
            {userRowsData}

            {count}
            <button onClick={() => {
                setCount(count + 1);
                console.log('test');
            }}>+</button>
        </div>
    )
}

export default AppUseMemo