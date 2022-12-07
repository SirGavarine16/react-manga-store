import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoreLayout } from "./layouts";
import { AboutUs, Blog, BlogEntry, Contact, Gallery, Home, Store } from "./pages";

const App: FC = () => {

  return (
    <Routes>
      <Route path='/' element={<StoreLayout />}>
        <Route index element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='store' element={<Store />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/entry' element={<BlogEntry />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}
export default App;