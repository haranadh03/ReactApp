import { useState } from "react"

function Home() {
    const [count, setCount]=useState(0)
    const intCount =() => {
        setCount(count+1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={intCount}>+</button>
        </>
    )
}
export default Home