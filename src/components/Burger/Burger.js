import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  const innerIngredients = Object.entries(props.ingredients).map(
    ([ingredient, num]) => {
      return [...Array(num)].map((_, i) => {
        return <BurgerIngredient type={ingredient} key={ingredient + i} />;
      });
    }
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {innerIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
