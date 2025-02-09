import { createContext, useState } from 'react'
import './App.css'
import Child1 from './Child1'

//Creating Context

const data1 = createContext();
const data2 = createContext();

function App() {

  const [count, setCount] = useState(10)

  console.log("APP component rendered");

  return (
    <>
      <h1>App Component's Children</h1>

      <data1.Provider value={count}>
        <data2.Provider value={setCount}>
          <Child1 />
        </data2.Provider>
      </data1.Provider>


      {/* <Child1 count={count} setCount={setCount} /> */}

    </>
  )
}

export default App

export { data1, data2 };
