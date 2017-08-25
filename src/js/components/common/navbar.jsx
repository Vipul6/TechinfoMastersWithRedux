import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const NavBar = () => {

    const homeClass =  classNames({
      'active': location.pathname === '/',
    })
    const searchClass =  classNames({
      'active': location.pathname.match(/^\/search/),
    })
    const detailsClass =  classNames({
      'active': location.pathname.match(/^\/details/),
      'hidden':!location.pathname.match(/^\/details/),
    })
    return (
        <section className='topbar'>
            <ul  className='topnav nav-right'>
                <li>
                    <Link className={homeClass} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={searchClass} to='/search'>Search</Link>
                </li>
                  <li>
                    <Link className={detailsClass} to={location.pathname}>Details</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar
