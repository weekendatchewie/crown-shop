import { Outlet } from 'react-router-dom';


function Navigation() {
    return (
        <>
            <div className="navigation">
                <h1>Home</h1>
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;