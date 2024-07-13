import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-[#1313131a] p-32 rounded-lg mt-10 flex justify-between">
                <div >
                    <h1 className="text-5xl mt-32 w-[500px] font-bold text-black">Books to freshen up your bookshelf</h1>
                    <button className="btn border-none bg-[#23be0a] text-white mt-10 hover:text-black"> <NavLink to='/listedBooks'>View the list</NavLink> </button>
                </div>
                <div>
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/ZJ6rvzL/01.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide10" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/wg3MtGQ/02.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/DwvJBGZ/03.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/7vP0cmh/04.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/Ttb8K8n/05.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/0MH5DJ9/06.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/hfy9gGT/07.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/6ZgFqLr/08.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide7" className="btn btn-circle">❮</a>
                    <a href="#slide9" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide9" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/FmpdfRy/09.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide8" className="btn btn-circle">❮</a>
                    <a href="#slide10" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide10" className="carousel-item relative w-full">
                    <img
                    src="https://i.ibb.co/60yjv6J/10.jpg"
                    className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide9" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;