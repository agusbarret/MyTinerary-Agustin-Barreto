import Home from "./pages/Home.jsx";
import Cities from "./pages/Cities.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./components/LayoutMain.jsx";
import CityDetails from "./pages/CityDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js"
import SignUp from "./pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LogIn from "./pages/LogIn.jsx";

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<CityDetails />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<LogIn/>} />
          </Routes>
        </LayoutMain>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
