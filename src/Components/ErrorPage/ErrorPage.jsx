import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1">
                <h1 data-aos="fade-down-right" className="text-9xl font-black text-blue-950 text-center mt-5">Opps!</h1>
                <h1 className="text-2xl font-bold text-center mt-10 text-black">4O4 - Page Not Found</h1>
                <p className="text-center font-light text-black">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <button className="  bg-lime-500 p-5 mt-10 text-2xl font-bold rounded-full hover:bg-lime-200 border border-5px border-lime-500 transition-all"><NavLink to='/'>Go to Home page </NavLink></button>
            </div>
        </div>
    );
};

export default ErrorPage;