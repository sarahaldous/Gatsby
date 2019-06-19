import React, { useState } from 'react'
import Layout from "../components/layout"

const App = () => {
    const [count, setCount] = useState(1)
    return (
        <div>
            <Layout>
            <h1>{count}</h1>
            <button onClick={() => setCount(count * 5)}>More</button>
            <button onClick={() => setCount(count / 2) }
            >Less</button>
            </Layout>
        </div>
    )
}

export default App