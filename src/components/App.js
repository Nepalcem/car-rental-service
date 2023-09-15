import { Routes, Route } from "react-router-dom";
import { Home, Catalog, Favorites,NotFound } from "./pages";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
