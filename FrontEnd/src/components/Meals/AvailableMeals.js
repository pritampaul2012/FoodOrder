import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [mealList, setMealList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMeal = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:5000/foodlist");
    setMealList(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMeal();
  }, []);
  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>;
  }
  if (mealList.length === 0) {
    return <p className={classes.loading}>No Meals to fetch</p>;
  }
  const Meal = mealList.map((meal) => <MealItem meal={meal} key={meal._id} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Meal}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
