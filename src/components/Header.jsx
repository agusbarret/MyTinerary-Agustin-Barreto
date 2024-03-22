import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <>
            <section className="flex-col flex transform bg-opacity-[100%] bg-[#2d2d38] pb-[15px] pt-[15px]">
                <div className="flex flex-col w-[100%] max-w-[1280px] mr-[auto] ml-[auto]">
                    <div className="flex flex-col items-stretch">
                        <div className="flex flex-row gap-[12px] justify-between items-center">
                            <div className="flex items-center justify-center h-[auto] w-[auto] pr-[50px]">
                                <img
                                    src="/MyTinerary.png"
                                    sizes="83.34vw"
                                    className="h-[auto] w-[41.67%]"
                                ></img>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="flex gap-[32px] items-center justify-around">
                                    <Link
                                        to="/"
                                        className="no-underline focus:outline-none text-[#ffffff] text-opacity-[100%] text-[18px] font-semibold"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/cities"
                                        className="no-underline focus:outline-none text-[#ffffff] text-opacity-[100%] text-[18px] font-semibold"
                                    >
                                        Cities
                                    </Link>
                                    <div className="relative w-[8%] h-[auto]" onClick={toggleMenu}>
                                        <img
                                            src="/profile.png"
                                            sizes="33.34vw"
                                            alt="Profile"
                                        />
                                        {menu && (
                                            <ul className="absolute bg-white shadow-md rounded-md p-2 top-8 right-0 flex gap-4">
                                                <li>
                                                    <Link to="/signup" className="cursor-pointer">Sign Up</Link>
                                                </li>
                                                <li>
                                                    <Link to="/login" className="cursor-pointer text-sky-600">Log In</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
