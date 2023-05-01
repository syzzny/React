import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavHeader() {
    return (
        <div>
            <NavLink to='/' 
                className={({isActive})=>(isActive ? "nav on" : "nav" )}>
                    Home
            </NavLink>
            <NavLink to='/storylist'
                className={({isActive})=>(isActive ? "nav on" : "nav" )}>
                    Story
            </NavLink>
        </div>
    )
}
