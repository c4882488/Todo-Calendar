import React from "react";
import meals from "./data";

export default function Meal(props) {
  const { id } = props.match.params;
  const targetMeal = meals.find((meal) => meal.id === parseInt(id, 10));
  return targetMeal ? (
    <div style={{ padding: 10 }}>
      <h2 style={{ margin: "5px 0" }}>{targetMeal.name}</h2>
      <div style={{ paddingBottom: 3 }}>
        $
        <span style={{ color: "red", fontSize: 18, fontWeight: 600 }}>
          {targetMeal.price}
        </span>
      </div>
      <img alt={targetMeal.name} src={targetMeal.url} style={{ width: 250 }} />
    </div>
  ) : (
    <span>查無餐點</span>
  );
}
