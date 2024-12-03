import React, { useState } from 'react'

function Ternary() {
    let [statut, setStatus] = useState(false);


    return (
        <>
            <h1>Conditional Rendering with Ternary Operator</h1>

            {
                (statut) ? <h2>Paragraph is visible</h2> : ''
            }
            <button onClick={() => setStatus(!statut)} className='callDost'>
                { (statut) ? 'Hide' : 'Show'}

            </button>

        </>
    )
}

export default Ternary