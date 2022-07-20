import {useContext} from "react";
import {Link, Outlet} from 'react-router-dom';

import {ReactComponent as Logo} from "../../assets/crown.svg";
import './navigation.styles.scss';
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";


function Navigation() {

    const {currentUser} = useContext(UserContext)

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/shop">CONTACT</Link>

                    {currentUser ?
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> :
                        <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }

                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;