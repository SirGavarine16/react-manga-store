import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs, Blog, Contact, Gallery, Home, Store } from "./pages";

const App: FC = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/store' element={<Store />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}
export default App;