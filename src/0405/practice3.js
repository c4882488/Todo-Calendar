import React from "react";
import "./practice3.css";

const meals = [
  {
    id: 1,
    name: "嫩煎魚排佐鮮蔬",
    price: 350,
    url: "https://i.imgur.com/o8cd4Rw.jpg",
  },
  {
    id: 2,
    name: "清炒番茄義大利麵",
    price: 180,
    url: "https://i.imgur.com/KRboztK.jpg",
  },
  {
    id: 3,
    name: "九層塔沙拉",
    price: 120,
    url: "https://i.imgur.com/Yg1t5sW.jpg",
  },
  {
    id: 4,
    name: "澳洲牛排佐松露醬",
    price: 450,
    url: "https://i.imgur.com/uzJbxW5.jpg",
  },
];

function Meal(props) {
  return (
    <span className="meal-item">
      <div className="meal-item-photo-wrap">
        <img src={props.url} alt="meal" className="meal-item-photo" />
      </div>
      <span className="meal-item-title">{props.name}</span>
      <span className="meal-item-price">{props.price}</span>
    </span>
  );
}

function MealList(props) {
  return (
    <div className="meal-list">
      {props.meals.map((meal) => {
        return (
          <Meal
            name={meal.name}
            price={meal.price}
            url={meal.url}
            key={meal.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  return <MealList meals={meals} />;
}

export default App;
