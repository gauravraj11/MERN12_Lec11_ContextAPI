import React from 'react'
import Child2 from './Child2'

export default function Child1() {

    console.log("Child1 rendered");

  return (
    <div>
      {/* <h1>Child1 Component: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Child1</button> */}

      {/* <Child2 count={count} setCount={setCount}/> */}

      <Child2 />
    </div>
  )
}
