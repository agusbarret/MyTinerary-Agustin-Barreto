import Home from "./pages/Home.jsx";
import Cities from "./pages/Cities.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./components/LayoutMain.jsx";
import CityDetails from "./pages/CityDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<CityDetails />} />
          </Routes>
        </LayoutMain>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
