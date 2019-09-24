import React, { useState } from 'react'
import Layout from "../components/layout"

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Layout>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>More</button>
                <button onClick={() => setCount(count - 1) }
                >Less</button>
            </Layout>
        </div>
    )
}

export default App