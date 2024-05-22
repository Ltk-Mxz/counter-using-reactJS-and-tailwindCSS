import { useState } from "react"
function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-gray-500">
        <div>
            <h1 className="text-8xl text-slate-200">{count}</h1>
        </div>

        <div className="flex flex-row justify-evenly w-screen">
            <button onClick={increment} className="p-16 rounded-full bg-gray-600 text-8xl text-slate-200 hover:bg-blue-700 active:bg-blue-500">+</button>
            <button onClick={decrement} className="p-16 rounded-full bg-gray-600 text-8xl text-slate-200 hover:bg-blue-700 active:bg-blue-500">-</button>
        </div>
    </div>
}

export default Counter