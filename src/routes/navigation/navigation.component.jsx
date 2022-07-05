import {Link, Outlet} from 'react-router-dom';

import { ReactComponent as Logo } from "../../assets/crown.svg";


function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;