import Hero from "../components/Hero";
import Carousel from "../components/Carousel";


const Home = () => {

  return (
    <>
    <Hero />
    <section className="pt-[140px] pb-[140px] flex flex-col bg-[#2d2d38] bg-opacity-[80%]">
      <Carousel />
    </section>
    </>
  )
}

export default Home;