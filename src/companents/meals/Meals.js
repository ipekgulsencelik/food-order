import { Fragment } from "react";

import MealsSummary from "./summary/MealsSummary";
import AvailableMeals from "./available/AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
