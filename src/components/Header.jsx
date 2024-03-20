import { Link } from "react-router-dom";
const Header = () => {
return (
    <>
    <section className="flex-col flex transform bg-opacity-[100%] bg-[#2d2d38] pb-[15px] pt-[15px]">
        <div className="flex flex-col w-[100%] max-w-[1280px] mr-[auto] ml-[auto]">
        <div className="flex flex-col items-stretch">
            <div className="flex flex-row gap-[12px] justify-between items-center">
            <div className="flex items-center justify-center h-[auto] w-[auto] pr-[50px]">
                <img src="/MyTinerary.png" sizes="83.34vw" className="h-[auto] w-[41.67%]"></img>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex gap-[32px] items-center justify-around">
                <Link to="/" className="no-underline focus:outline-none text-[#ffffff] text-opacity-[100%] text-[18px] font-semibold">Home</Link>
                <Link to="/cities" className="no-underline focus:outline-none text-[#ffffff] text-opacity-[100%] text-[18px] font-semibold">Cities</Link>
                <img src="/profile.png" sizes="33.34vw" className="w-[8%] h-[auto]"></img>
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
