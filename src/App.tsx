// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { pageview } from "./lib/gtag";

import Home from "./pages/Home";
import Servico from "./pages/ServicosPage";
import Site from "./pages/Sites";
import Sistema from "./pages/Sistemas";

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteChangeTracker />
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
