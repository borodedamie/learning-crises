import * as React from 'react'
// import { useRef, useState } from "react";
// import Modal from 'react-modal'
import { Link } from 'gatsby'
import { navbar, 
        logo, 
        searchBox,
        searchBoxIcon,
        menuList,
        menuListNav,
        menuItems,
        menuButton,
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
import { BiMenu} from "@react-icons/all-files/bi/BiMenu";
import { useForm, ValidationError } from '@formspree/react'

// const [modalIsOpen, setModalIsOpen] = useState(false)  

const styleActive = {
    color: '#fcb900', 
    fontSize: '16px', 
    fontWeight: '600', 
    borderBottom: '2px solid #fcb900', 
    paddingBottom: '3px',
}

const Layout = ({ children }) => {
    const [ state, handleSubmit ] = useForm('xeqdgqvr')

    if(state.succeeded) {
        console.log('it worked!')
        document.querySelector('#email').value = ''
    }

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
                {/* <button onClick={() => {setModalIsOpen(true)}}><FiSearch className={ searchBoxIcon } /></button> */}
                <FiSearch className={ searchBoxIcon } />  
                </div>
            </div>
            <div className={ menuList }>
                <nav className={ menuListNav }>
                    <ul className={ menuItems }>
                        <li><Link to='/' className={ navLinks } activeStyle={ styleActive }>Home</Link></li>
                        <li><Link to='/insight' className={ navLinks } activeStyle={ styleActive }>EduInsight</Link></li>
                        <li><Link to='/data' className={ navLinks } activeStyle={ styleActive }>EduData</Link></li>
                        <li><Link to='/support' className={ navLinks } activeStyle={ styleActive }>EduSupport</Link></li>
                        <li><Link to='/about' className={ navLinks } activeStyle={ styleActive }>About Us</Link></li>
                        <li><Link to = "" className= {menuButton}><BiMenu /></Link></li>
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
                    <li><Link to='/about'>About Us</Link></li>
                </ul>
            </div>
            <div className={ footerContact }>
                <h3>Contact Us</h3>
                <p>adedejimgt@gmail.com</p>
            </div>
            <form onSubmit={ handleSubmit }>
                <div className={ footerSubscription }>
                    <h3>Subscribe to our Newsletters</h3>
                    <input 
                        type="text"
                        id="email"
                        name="email" 
                        placeholder="Email Address" 
                    />
                    <ValidationError 
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                <div className={ submitButton }>
                    <button type='submit' disabled={state.submitting}>Submit</button>
                </div>           
                </div>
            </form>
        </footer>
      </div>  
    )
}

export default Layout