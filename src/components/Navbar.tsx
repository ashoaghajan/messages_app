import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export interface NavbarProps {
    
}
 
const Navbar: React.SFC<NavbarProps> = () => {

    const location = useLocation();
    const currentRouteStyle = 'green darken-4';

    const navLinkStyle = (path: string) => {
        return path === location.pathname ? currentRouteStyle : 'flow-text'
    }

    return ( 
        <nav>
            <div className="nav-wrapper">
                <ul className='center'>
                    <li className={navLinkStyle('/')}><NavLink to='/'><h5>Messages</h5></NavLink></li>
                    <li className={navLinkStyle('/colors')}><NavLink  to='/colors'><h5>Colors</h5></NavLink></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;
