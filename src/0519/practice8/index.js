import meals from "./data";
import Meal from "./Meal";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          {meals.map((meal) => {
            return (
              <Link
                key={meal.id}
                style={{ display: "block", padding: 5 }}
                to={`/Meal/${meal.id}`}
              >
                {meal.name}
              </Link>
            );
          })}
        </div>
        <div style={{ width: "70%" }}>
          <Switch>
            <Route path="/Meal/:id" component={Meal} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
