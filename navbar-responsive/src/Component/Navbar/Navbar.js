import React, { useState } from 'react';
import './Navbar.css';

// instead of using link ill use Navlink to style the links
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {


    const [isActive, setIsActive] = useState(false);
    // on the click the navbar will set to true 

    const handleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="navbar">

            <div className="logo">
                <h2>logo</h2>
            </div>
            {/* if isActive is equal to true then I want to set the 
            id equal to hidden if not i just want to set it equal to an empty id  */}
            <ul className="navbar__links" id={isActive ? "hidden" : "shownav"}>
                {/* {isActive ? "navba r__links active-link" : "navbar__links"
              }  */}

            
                <li className="navbar__item slidInDown1"  onClick={handleActive} >
                    <NavLink exact to="/" activeClassName="active-link"  >

                        Accueil
                    </NavLink>
                </li>


                <li className="navbar__item" onClick={handleActive}>
                    <NavLink exact to="/Apropos" activeClassName="active-link" >

                        Apropos
                    </NavLink>
                </li>

                <li className="navbar__item" onClick={handleActive}>
                    <NavLink exact to="/Services" activeClassName="active-link" >

                        Services
                    </NavLink>
                </li>

                <li className="navbar__item" onClick={handleActive}>
                    <NavLink exact to="/Events" activeClassName="active-link" >

                        Events
                    </NavLink>
                </li>

                {/* <Link to="/" activeClassName="active-link" >

                    <li className="navbar__item">Accueil</li>
                </Link> */}


            </ul>
            <div onClick={handleActive}>
            <FontAwesomeIcon    className="nav-icon"
            icon={isActive ? faTimes : faBars } />
            </div>
             {/* <div  onClick={handleActive}>
            <FontAwesomeIcon 
           
           className="nav-icon"
            icon={isActive ? faBars :  faTimes} 
           
                />
             
           

            </div>  */}

            {/* <button className="mobile-menu-icon" >
                {isActive ? (<i className="fa fa-time"></i>) :( <i className="fa fa-bars"></i> )}
            </button> */}




        </div>
    )
}

export default Navbar;

