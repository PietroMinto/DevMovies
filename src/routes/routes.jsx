import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";
import Filmes from "../containers/Filmes";
import Series from "../containers/Series";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default Router;
