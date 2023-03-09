import { Fragment } from "react";

import Header from "./companents/Layout/header/Header";
import Meals from "./companents/meals/Meals";
import Cart from "./companents/cart/Cart";

function App() {
  return (
    <Fragment>
        <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
