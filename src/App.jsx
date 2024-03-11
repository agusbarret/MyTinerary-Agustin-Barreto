import Home from "./pages/Home.jsx";
import Cities from "./pages/Cities.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./components/LayoutMain.jsx";
function App() {

  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  )
}

export default App;
