import React, { Component } from "react";
import "./practice1.css";

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

class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
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
      ],
    };
  }

  render() {
    return (
      <div className="meal-list">
        {this.state.meals.map((meal) => {
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
}

export default function App() {
  return <MealList />;
}
