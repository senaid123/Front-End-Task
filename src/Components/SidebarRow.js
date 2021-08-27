import React from 'react'
import "./SidebarRow.css"
const SidebarRow = ({Icon,title,selected})  => {
    return (
        <div className={`sidebarRow && ${selected && "selected"}`}>
            <Icon className="sidebarRow-icon"/>
            <h3 className="sidebarRow-title">{title}</h3>
        </div>
    )
}

export default SidebarRow
