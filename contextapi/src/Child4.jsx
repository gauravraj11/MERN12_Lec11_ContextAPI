import React from 'react'
import { data1, data2 } from './App';

export default function Child4() {

    console.log("Child4 rendered");

    return (
        <div>
            <data1.Consumer>
                {
                    (count) => {
                        return (
                            <data2.Consumer>
                            {
                                (setCount)=>{
                                    return(
                                        <>
                                        <h1>Child4 Component: {count}</h1>
                                         <button onClick={() => setCount(count + 1)}>Click Child4</button>
                                        </>
                                    )
                                }
                            }
                                
                            </data2.Consumer>
                        )
                    }
                }
            </data1.Consumer>
        </div>
    )
}
