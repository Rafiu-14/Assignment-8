import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='mx-20'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;