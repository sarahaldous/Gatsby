import React, { useState } from 'react'

const ArrExample = () => {
    const [names, setNames] = useState(["joe", "steve", "carol"])

    return (
        <div>
            <div>
                { names.map((name, i) => <h1 key={i}>{name}</h1>) }
            </div>
            <button onClick={() => setNames(prev => [...prev, "frank"])}>Add Frank</button>
        </div>
    )
}

export default ArrExample