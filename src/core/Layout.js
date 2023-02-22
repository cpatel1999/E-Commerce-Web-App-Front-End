import React from 'react'
import Menu from './core/Menu'

function Layout({ 
    title = 'Title', 
    description = 'Description', 
    className, 
    children 
}) {
    return (
        <div>
            <Menu />
            <div className='jumbotron'>
                <h2>{title}</h2>
                <p classame="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout
