import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
