import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servico from "./pages/ServicosPage";
import Site from "./pages/Sites";
import Sistema from "./pages/Sistemas";

function App() {
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
