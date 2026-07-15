import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import ContactLayout from "./layout/ContactLayout.jsx";
import ContactInfo from "./components/ContactInfo.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./components/NotFound.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<ContactInfo />} />
        <Route path="form" element={<ContactForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
