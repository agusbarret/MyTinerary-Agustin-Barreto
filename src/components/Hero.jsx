import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-[140px] pb-[140px] bg-no-repeat opacity-[100%] bg-cover bg-top bg-[url('travel-hero.jpg')]">
    <div className="mr-[auto] ml-[auto] sm:pr-[24px] pr-[24px] md:pr-[32px] sm:pl-[24px] pl-[24px] md:pl-[32px] max-w-[1280px] bg-[#2d2d38] bg-opacity-[71%] shadow-xl rounded-[12px]">
        <div className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-stretch sm:items-center justify-center gap-[20px]">
            <img src="/MyTinerary.png" alt="MyTinerary" sizes="(max-width: 500px) 100vw, 500px" className="h-[auto] w-[auto] pt-[10px]"></img>
            <p className="text-center max-w-[640px] text-[24px] font-semibold text-white">Find your perfect trip, designed by insiders who know and love their cities</p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-[12px] pb-[10px]">
            <button type="button" className="text-white border-solid text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-opacity-[100%] shadow-lg bg-[#2d2d38] hover:bg-zinc-50 hover:text-zinc-950">
                <Link to="/cities">
                <span className="text-[18px] font-semibold">Your Perfect Trip Starts Here!</span>
                </Link>
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
};

export default Hero;
