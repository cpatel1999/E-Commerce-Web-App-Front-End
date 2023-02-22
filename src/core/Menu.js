import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// Link is used because we dont't want to re-render out page.
//withRouter is used to access props history.

/**
 * Checks which component is active
 * @param {*} history specifies the current active class
 * @param {*} path specifies the path to which we want to be redirected
 */
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: '#ff9900'
        }
    } else {
        return {
            color: '#ffffff'
        }
    }
}


function Menu({history}) {
    console.log(history)
    return (
        <div>
            <ul className='nav nav-tabs bg-primary'>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>Signin</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu)
