import { RouteObject } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details',
    element: <Details />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
