import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageview } from './lib/gtag';
import Home from "./pages/Home";
import Servico from "./pages/ServicosPage";
import Site from "./pages/Sites";
import Sistema from "./pages/Sistemas";

function App() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicos" element={<Servico />} />
        <Route path="/Sites" element={<Site />} />
        <Route path="/Sistemas" element={<Sistema />} />
      </Routes>
    </Router>
  );
}

export default App;
