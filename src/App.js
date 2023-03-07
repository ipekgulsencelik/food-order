import { Fragment } from "react";

import Header from "./companents/Layout/header/Header";
import Meals from "./companents/meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
