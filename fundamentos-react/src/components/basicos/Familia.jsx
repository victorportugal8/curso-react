import React from "react"

export default props =>{
    return(
        <div>
            <h2>Família</h2>
            {
                props.children.map((child, i) =>{
                    return React.cloneElement(child, { ...props, key: i})
                })
            }
        </div>
    )
}