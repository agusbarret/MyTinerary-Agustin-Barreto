const Footer = () => {
  return (
    <section className="pb-[80px] pt-[80px] bg-opacity-[100%] bg-[#2d2d38]">
    <div className="flex flex-col w-[100%] max-w-[1280px] mr-[auto] ml-[auto] pr-[32px] pl-[32px]">
        <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-center flex-wrap gap-[32px]">
            <a className="no-underline focus:outline-none text-[14px] opacity-[100%] text-[#ffffff] text-opacity-[100%]">Policies</a>
            <a className="no-underline focus:outline-none text-[14px] opacity-[100%] text-opacity-[100%] text-[#ffffff]">About</a>
            <a className="no-underline focus:outline-none text-[14px] opacity-[100%] text-opacity-[100%] text-[#ffffff]">Blog</a>
            <a className="no-underline focus:outline-none text-[14px] opacity-[100%] text-[#ffffff] text-opacity-[100%]">Contact</a>
        </div>
        <span className="text-[12px] text-center sm:text-center transform text-[#ffffff] text-opacity-[63%]">© 2024. Mindhub Cohort</span>
        </div>
    </div>
    </section>
  );
};

export default Footer;
