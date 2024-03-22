import Home from "./pages/Home.jsx";
import Cities from "./pages/Cities.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./components/LayoutMain.jsx";
import CityDetails from "./pages/CityDetails.jsx";
import { useDispatch } from "react-redux";
import SignUp from "./pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LogIn from "./pages/LogIn.jsx";
import alerts from "./utils/alerts.js";
import { useEffect } from "react";
import authQueries from "./services/authQueries.js";
import { login } from "./redux/actions/userAction.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data));
        alerts.success("Welcome " + res.data.first_name);
      }
    });
  }, []);

  return (
    <BrowserRouter>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<CityDetails />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<LogIn/>} />
          </Routes>
        </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
