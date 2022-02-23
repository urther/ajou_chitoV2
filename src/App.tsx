import React, { useState } from "react";
import { Route } from "react-router-dom";

import Footer from "./components/Footer";
import { Main, Questions, Result } from "./pages/index";

function App() {
  const [result, setResult] = useState({ EI: 0, SN: 0, NF: 0, PJ: 0 });

  return (
    <div className="App">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/:id">
        <Questions />
      </Route>
      <Route path="/result/:id">
        <Result />
      </Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
