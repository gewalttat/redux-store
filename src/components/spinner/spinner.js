import React from 'react'

import './spinner.css'

const Spinner = () => {

   const textColor = {
    color:'whitesmoke'
}
    return (
        <div>
        <p style={textColor}>Loading...</p>
        <div class="loadingio-spinner-ripple-r8wxn64hgvj"><div class="ldio-4nmdi7u6w9s">
        <div></div><div></div>
        </div></div>
    </div>
    )
}

export default Spinner;