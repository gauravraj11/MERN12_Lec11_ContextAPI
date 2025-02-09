import React from 'react'
import Child3 from './Child3'

export default function Child2() {

    console.log("Child2 rendered");

  return (
    <div>
      {/* <h1>Child2 Component: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Child2</button> */}

      {/* <Child3 count={count} setCount={setCount}/> */}

      <Child3 />
    </div>
  )
}
