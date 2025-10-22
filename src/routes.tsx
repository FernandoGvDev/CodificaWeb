// src/routes.tsx
import Home from './pages/Home/index';
import Servico from './pages/ServicosPage/index';
import Site from './pages/Sites/index';
import Sistema from './pages/Sistemas/index';

// Cada objeto define uma rota do site
const routes = [
  { path: '/', component: Home },
  { path: '/Servicos', component: Servico },
  { path: '/Sites', component: Site },
  { path: '/Sistemas', component: Sistema },
];

export default routes;
