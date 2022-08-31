import * as React from 'react'
import { Link } from 'gatsby'
import { navbar, 
        logo, 
        searchBox,
        searchBoxIcon,
        menuList,
        menuListNav,
        menuItems,
        navLinks,
        footer,
        footerLogo,
        icon,
        footerPages,
        footerContact,
        footerSubscription,
        logoCon,
        submitButton } from './layout.module.css'
// Serve images from filesystem
import { StaticImage } from 'gatsby-plugin-image'
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

const Layout = ({ children }) => {
    return (
      <div>
        <header>
            <div className={ navbar }>
                <div className={ logoCon }>
                    <StaticImage 
                        alt='logo'
                        src='../../images/logo.png'
                        className={ logo }
                    />
                </div>
                <div className={ searchBox }>
                    <FiSearch className={ searchBoxIcon } />
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
        <footer className={ footer }>
            <div className={ footerLogo }>
                <div>
                    <StaticImage 
                        alt='logo'
                        src='../../images/logo.png'
                        className={ footerLogo }
                    />
                </div>
                <div className={ icon }>
                    <Link to=""><FaFacebookF /></Link>
                    <Link to=""><FaTwitter /></Link>
                    <Link to=""><SiGmail /></Link>
                </div>  
            </div>
            <div className={ footerPages }>
                <h3>Pages</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/insight'>EduInsight</Link></li>
                    <li><Link to='/data'>EduData</Link></li>
                    <li><Link to='/support'>EduSupport</Link></li>
                </ul>
            </div>
            <div className={ footerContact }>
                <h3>Contact Us</h3>
                <p>adedejimgt@gmail.com</p>
            </div>
            <div className={ footerSubscription }>
                <h3>Subscribe to our Newsletters</h3>
                <input 
                    type="text" 
                    placeholder="Email Address" 
                />
            <div className={ submitButton }>
                <button>Submit</button>
            </div>           
            </div>
        </footer>
      </div>  
    )
}

export default Layout