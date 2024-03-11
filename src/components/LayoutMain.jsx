import Header from "./Header";
import Footer from "./Footer";

export const LayoutMain = ({children}) => {
  return (
    <>
    <Header />
    {children} 
    <Footer />
    </>
  )
}

export default LayoutMain;