import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="pb-[80px] pt-[80px] bg-opacity-[100%] bg-[#2d2d38]">
            <div className="flex flex-col w-[100%] max-w-[1280px] mr-[auto] ml-[auto] pr-[32px] pl-[32px]">
                <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center justify-center flex-wrap gap-[32px]">
                        <Link to="/" className="no-underline focus:outline-none text-[14px] opacity-[100%] text-[#ffffff] text-opacity-[100%] hover:underline">
                            Home
                        </Link>
                        <Link to="/cities" className="no-underline focus:outline-none text-[14px] opacity-[100%] text-opacity-[100%] text-[#ffffff] hover:underline">
                            Cities
                        </Link>
                    </div>
                    <div className="flex items-center justify-center flex-wrap gap-[32px]">
                        <i className="inline-block w-[24px] h-[auto]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                            </svg>
                        </i>
                        <i className="inline-block w-[24px] h-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path>
                            </svg>
                        </i>
                        <i className="inline-block w-[24px] h-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                        </i>
                    </div>
                    <div className="flex items-center justify-center flex-wrap gap-[32px]">
                        <Link className="no-underline focus:outline-none text-[14px] opacity-[100%] text-[#ffffff] text-opacity-[100%] hover:underline">
                            Policies
                        </Link>
                        <Link className="no-underline focus:outline-none text-[14px] opacity-[100%] text-opacity-[100%] text-[#ffffff] hover:underline">
                            About
                        </Link>
                        <Link className="no-underline focus:outline-none text-[14px] opacity-[100%] text-opacity-[100%] text-[#ffffff] hover:underline">
                            Blog
                        </Link>
                        <Link className="no-underline focus:outline-none text-[14px] opacity-[100%] text-[#ffffff] text-opacity-[100%] hover:underline">
                            Contact
                        </Link>
                    </div>
                    <span className="text-[12px] block text-center sm:text-center transform text-[#ffffff] text-opacity-[63%] hover:underline">
                        © 2024. Mindhub Cohort
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Footer;
