import * as React from 'react'
import { Link } from 'gatsby'
import { navbar, 
         logo, 
         searchBox,
         menuList,
         menuListNav,
         menuItems,
         navLinks } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ children }) => {
    return (
      <div>
        <header>
            <div className={ navbar }>
                <div>
                    <StaticImage 
                        alt='logo'
                        src='../../images/logo.png'
                        className={ logo }
                    />
                </div>
                <div className={ searchBox }>
                    <i className='bx bx-search'></i>
                </div>
            </div>
            <div className={ menuList }>
                <nav className={ menuListNav }>
                    <ul className={ menuItems }>
                        <li><Link to='/' className={ navLinks }>Home</Link></li>
                        <li><Link to='/insight' className={ navLinks }>EduInsight</Link></li>
                        <li><Link to='/data' className={ navLinks }>EduData</Link></li>
                        <li><Link to='/support' className={ navLinks }>EduSupport</Link></li>
                        <li><Link to='/about' className={ navLinks }>About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            { children }
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
      </div>  
    )
}

export default Layout