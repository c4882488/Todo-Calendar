import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Activities from "./Activities";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <div>
            <Link to="/products">商品清單</Link>
          </div>
          <div>
            <Link to="/activities">活動資訊</Link>
          </div>
          <div>
            <Link to="/about">關於</Link>
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "80%",
            border: "1px solid black",
          }}
        >
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/products" component={Products} />
            <Route path="/activities" component={Activities} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
