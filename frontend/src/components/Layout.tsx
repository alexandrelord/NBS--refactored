import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Layout;

/* 
    An <Outlet> renders whatever child route is currently active,
    so you can think about this <Outlet> as a placeholder.
*/
