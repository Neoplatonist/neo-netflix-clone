import { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faGift,
    faBell,
    faUserCircle,
    faCaretDown,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [BG, setBG] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [tabletDropdown, setTabletDropdown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            window.scrollY > 100 ? setBG(true) : setBG(false));

        return window.removeEventListener("scroll", () =>
            window.scrollY > 100 ? setBG(true) : setBG(false));
    }, []);

    const toggleMobileNav = () => setMobileNav(!mobileNav);
    const toggleTabletDropdown = () => setTabletDropdown(!tabletDropdown);

    return (
        <div className={"navbar" + (BG ? " navbar-bg" : "")}>
            <div className="navbar-left">
                <nav className="navbar-mobile-hamburger">
                    <div onClick={toggleMobileNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <ul
                        id="hamburger-slider"
                        style={{ left: mobileNav && '0' }}>
                        <li onClick={toggleMobileNav}>
                            <span className="nav-esc">X</span>
                        </li>

                        <li className="nav-mobile-links">
                            <a href="#home">Home</a>
                        </li>

                        <li className="nav-mobile-links">
                            <a href="#tv">TV Shows</a>
                        </li>

                        <li className="nav-mobile-links">
                            <a href="#movies">Movies</a>
                        </li>

                        <li className="nav-mobile-links">
                            <a href="#news">News & Popular</a>
                        </li>

                        <li className="nav-mobile-links">
                            <a href="#mylist">My List</a>
                        </li>
                    </ul>
                </nav>

                <div className="navbar-logo" style={{ height: "30px", width: "90px" }}>
                    <img src="neoflix.svg" alt="Neoflix Logo" />
                </div>

                <div className="navbar-tablet-dropdown">
                    <button
                        className="dropbtn"
                        onClick={toggleTabletDropdown}
                        style={{ color: tabletDropdown && 'red' }}>Browse
                        <FontAwesomeIcon className="down-arrow" icon={faCaretDown} />
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
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                <div>
                    Kids
                </div>

                <div>
                    DVD
                </div>

                <div>
                    <FontAwesomeIcon icon={faGift} />
                </div>

                <div>
                    <FontAwesomeIcon icon={faBell} />
                </div>

                <div>
                    <FontAwesomeIcon icon={faUserCircle} style={{ width: 25, height: 25 }} />

                </div>
            </div>

            <div className="navbar-mobile-right">
                <div>
                    <FontAwesomeIcon icon={faGift} />
                </div>

                <div>
                    <FontAwesomeIcon icon={faBell} />
                </div>

                <div>
                    <FontAwesomeIcon icon={faUserCircle} style={{ width: 25, height: 25 }} />

                </div>
            </div>
        </div>
    );
}

export default NavBar;
