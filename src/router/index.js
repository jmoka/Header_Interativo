import { createRouter, createWebHistory } from 'vue-router';

// Importando componentes
import HomeView from '../views/index.vue'; // Ajuste o caminho do seu componente
import SobreView from '../views/sobre.vue'; // Ajuste o caminho do seu componente
 import ContatosView from "../views/contatos.vue"; // Ajuste o caminho do seu componente

// Criando as rotas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Componente associado à rota
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreView,
  },
  {
    path: '/contatos',
    name: 'contatos',
    component: ContatosView,
  },
];

// Criando e exportando o router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
