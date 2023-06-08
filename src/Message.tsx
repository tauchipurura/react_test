import React from 'react'

//PascalCasing
const Message = () => {
    //JSX:JAvascript XML

    const name = "Tau"
    if (name)
        return (
            <h1>Hello {name}</h1>
        )
    return <h1>Hello World</h1>
}

export default Message