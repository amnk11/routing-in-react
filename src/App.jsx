import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />;
    </>
  );
};

export default App;
