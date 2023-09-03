import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Agents from './pages/Agents'
import List from './pages/List'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="agents" element={<Agents />} />
      <Route path="agents" element={<List />} />
      <Route path="details" element={<Details />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App