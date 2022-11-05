import React, { useState } from "react"
import { Link } from 'gatsby';
import './style.css'
import { navbar, 
        logo, 
        searchBox,
        searchBoxIcon,
        menuListNav,
        navLinks,
        footer,
        footerLogo,
        icon,
        footerPages,
        footerContact,
        footerSubscription,
        logoCon,
        menuBtn,
        closeeBtn,
        builtBy,
        submitButton } from './layout.module.css'
// Serve images from filesystem
import { StaticImage } from 'gatsby-plugin-image'
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
import { RiMenu3Fill} from '@react-icons/all-files/ri/RiMenu3Fill'
import { RiCloseFill} from '@react-icons/all-files/ri/RiCloseFill'
import { useForm, ValidationError } from '@formspree/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Search from "../search/index"


const styleActive = {
    color: '#fcb900', 
    fontSize: '16px', 
    fontWeight: '600', 
    borderBottom: '2px solid #fcb900', 
    paddingBottom: '3px',
}

const Layout = ({ children }) => {
const [ state, handleSubmit ] = useForm('xeqdgqvr')

const [ search, setSearch ] = useState(false)
    
  // Function to toggle sidebar
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)

    if(state.succeeded) {
        toast.success('Thank you for subscribing!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        document.querySelector('#email').value = ''
    }

    return (
      <div>
        <header>
            <div className={ navbar }>
            <div className={ logoCon }>
            < RiMenu3Fill className={menuBtn} style={{ color: 'white', zIndex: '3000000', fontSize: '2rem' ,paddingLeft:'2rem' ,cursor:'pointer'  }} onClick={toggleSidebar} />
                    <StaticImage 
                        alt='logo'
                        src='../../images/logo.png'
                        className={ logo }
                    />
                </div>
                { !search && <div onClick={ () => setSearch(true)} className={ searchBox } >
                <FiSearch className={ searchBoxIcon }  />  
                </div> }
                { search && <div>
                    <Search 
                     classNames={{
                        input: 'searchInput'
                     }}/>
                </div> }
            </div>        
            <div className={showSidebar ? 'navbarr activee' : 'navbarr'}>
                <nav className={ menuListNav }>
                    <div className="menu-bars">
                        <RiCloseFill className={closeeBtn} onClick={toggleSidebar}  style={{color:'#000' , cursor:'pointer' , display:'none'}}/>
                    </div>
                        <li><Link to='/' className={ navLinks } activeStyle={ styleActive }>Home</Link></li>
                        <li><Link to='/insight' className={ navLinks } activeStyle={ styleActive }>EduInsight</Link></li>
                        <li><Link to='/data' className={ navLinks } activeStyle={ styleActive }>EduData</Link></li>
                        <li><Link to='/support' className={ navLinks } activeStyle={ styleActive }>EduSupport</Link></li>
                        <li><Link to='/about' className={ navLinks } activeStyle={ styleActive }>About Us</Link></li>
                </nav>
                {/* <Search classNames={{ input: 'searchInput'}}/> */}
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
            <div>
            </div>
            
        </footer>
        <div className={builtBy}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> x 
             <a href="https://www.contentful.com" target="_blank" rel="noreferrer">
                <StaticImage 
                        alt='logo'
                        src='../../images/contentful.png'
                        style={{ width: '90px', marginLeft: "0.5rem", marginTop: "-0.1rem" }}
                    /></a>
        </div>
        <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </div>  
    )
}

export default Layout