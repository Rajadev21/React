import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Account() {
    return (
        <>
            <h1>This is account component</h1>
            <li>
                <Link to="useraccount">UserAccount</Link>
            </li>
            <li>
                <Link to="adminaccount">AdminAccount</Link>
            </li>
            
            <Outlet></Outlet>
        </>
    )
}

export default Account