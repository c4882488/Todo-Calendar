import React, { Component } from "react";
import "./practice2.css";

class Meal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemain: props.timeRemain,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      if (this.state.timeRemain > 0) {
        this.setState((preState) => ({
          timeRemain: preState.timeRemain - 1,
        }));
      } else {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="meal-item">
        <div className="meal-item-photo-wrap">
          <img src={this.props.url} alt="meal" className="meal-item-photo" />
        </div>
        <span className="meal-item-title">{this.props.name}</span>
        <span className="meal-item-price">{this.props.price}</span>
        <button disabled={this.state.timeRemain === 0}>
          加入購物車
          {this.state.timeRemain > 0 && (
            <span>（剩餘 {this.state.timeRemain} 秒）</span>
          )}
        </button>
      </span>
    );
  }
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
          timeRemain: 10,
        },
        {
          id: 2,
          name: "清炒番茄義大利麵",
          price: 180,
          url: "https://i.imgur.com/KRboztK.jpg",
          timeRemain: 15,
        },
        {
          id: 3,
          name: "九層塔沙拉",
          price: 120,
          url: "https://i.imgur.com/Yg1t5sW.jpg",
          timeRemain: 3,
        },
        {
          id: 4,
          name: "澳洲牛排佐松露醬",
          price: 450,
          url: "https://i.imgur.com/uzJbxW5.jpg",
          timeRemain: 19,
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
              timeRemain={meal.timeRemain}
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
