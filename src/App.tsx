import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servico from './pages/ServicosPage';
import Site from './pages/Sites';
import Sistema from './pages/Sistemas';

function App() {
  useEffect(() => {
    document.dispatchEvent(new Event('render-event'));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Servicos" element={<Servico />} />
      <Route path="/Sites" element={<Site />} />
      <Route path="/Sistemas" element={<Sistema />} />
    </Routes>
  );
}

export default App;
