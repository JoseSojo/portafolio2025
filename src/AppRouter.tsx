// src/router.jsx
import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import App from './PorfolioApp'
import IndexApp from './App'
import ContizationApp from './ContizationApp'

// 1. Crear una ruta raíz (puede ser un layout)
const rootRoute = createRootRoute({
  component: IndexApp,  
})

// 2. Definir rutas hijas
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const cotizarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cotizar',
  component: ContizationApp,
})

// 4. Construir el árbol de rutas
const routeTree = rootRoute.addChildren([
  indexRoute,
  cotizarRoute,
])

// 5. Crear el enrutador
export const router = createRouter({ routeTree })

// 6. Definir tipos para TypeScript (opcional pero recomendado)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}