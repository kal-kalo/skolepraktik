import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Agents from "./pages/Agents";
import Houses, { housesLoader } from "./pages/houses/Houses";
//import HouseDetail from "./pages/HouseDetail";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// layouts
import RootLayout from "./layouts/RootLayout";
import HousesLayout from "./layouts/HousesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="agents" element={<Agents />} />
      <Route path="houses" element={<HousesLayout />} >
        <Route index element={<Houses />} loader={housesLoader} />
      </Route>
      <Route path="favorites" element={<Favorites />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
