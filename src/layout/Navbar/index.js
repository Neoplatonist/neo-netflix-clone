import { useEffect, useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch, 
    faGift,
    faBell,
    faUserCircle,
    faCaretDown,
    faBars,
} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [BG, setBG] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)
    const [tabletDropdown, setTabletDropdown] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => 
            window.scrollY > 100 ? setBG(true) : setBG(false))

        return window.removeEventListener("scroll", () => 
            window.scrollY > 100 ? setBG(true) : setBG(false))
    }, [])

    const toggleMobileNav = () => setMobileNav(!mobileNav) 
    const toggleTabletDropdown = () => setTabletDropdown(!tabletDropdown) 

  return (
    <div className={"navbar" + (BG ? " navbar-bg" : "")}> 
        <div className="navbar-left">
            <nav className="navbar-mobile-hamburger">
                <div onClick={toggleMobileNav}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                
                <ul 
                    id="hamburger-slider" 
                    style={{ left: mobileNav && '0' }}>
                    <li onClick={toggleMobileNav}><span className="nav-esc">X</span></li>
                    <li className="nav-mobile-links"><a href = "#home">Home</a></li>
                    <li className="nav-mobile-links"><a href="#tv">TV Shows</a></li>
                    <li className="nav-mobile-links"><a href="#movies">Movies</a></li>
                    <li className="nav-mobile-links"><a href="#news">News & Popular</a></li>
                    <li className="nav-mobile-links"><a href = "#mylist">My List</a></li>
                </ul>
            </nav> 
            
            <div className="navbar-logo" style={{height: "30px", width: "90px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 1024 276.742">
                    <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26" />
                </svg>
            </div>
            
             <div className="navbar-tablet-dropdown">
                
                <button 
                    className="dropbtn" 
                    onClick={toggleTabletDropdown}
                    style={{ color: tabletDropdown && 'red' }}>Browse
                    <FontAwesomeIcon className="down-arrow" icon={faCaretDown}/>
                </button> 
                    
                <div 
                    className="dropdown-content" 
                    style={{ display: tabletDropdown && 'block' }}>
                    <a href="#home">Home</a>
                    <a href="#tv">TV Shows</a>
                    <a href="#movies">Movies</a>
                    <a href="#news">News & Popular</a>
                    <a href="#mylist">My List</a>
                </div>
            </div>

            <ul className="navbar-center">
                <li>
                    <a href="#home">Home</a>
                </li>
                
                <li>
                    <a href="#tv">TV Shows</a>
                </li>
                
                <li>
                    <a href="#movies">Movies</a>
                </li>
                
                <li>
                    <a href="#news">News & Popular</a>
                </li>
                
                <li>
                    <a href="#mylist">My List</a>
                </li>
            </ul>
        </div>

        <div className="navbar-right">
            <div>
                 <FontAwesomeIcon icon={faSearch}/>
            </div>
            
            <div>
                Kids
            </div>
            
            <div>
                DVD
            </div>
            
            <div>
                <FontAwesomeIcon icon={faGift}/>
            </div>
            
            <div>
               <FontAwesomeIcon icon={faBell}/>
            </div>
            
            <div>
                <FontAwesomeIcon icon={faUserCircle} style={{width:25, height: 25}}/>
    
            </div>
        </div>

        <div className="navbar-mobile-right">
            <div>
                <FontAwesomeIcon icon={faGift}/>
            </div>
            
            <div>
               <FontAwesomeIcon icon={faBell}/>
            </div>
            
            <div>
                <FontAwesomeIcon icon={faUserCircle} style={{width:25, height: 25}}/>
    
            </div>
        </div>
    </div>
  )
}

export default NavBar