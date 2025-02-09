import React, { useContext } from 'react'
import Child4 from './Child4'

import { data1, data2 } from './App';

export default function Child3() {

    console.log("Child3 rendered");

    const count = useContext(data1);
    const setCount = useContext(data2);
  return (
    <div>

      <h1>Child3 Component: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Child3</button>

      {/* <Child4 count={count} setCount={setCount}/> */}

      <Child4 />
    </div>
  )
}
