import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Products from "./Products";
import Activities from "./Activities";
import About from "./About";
import NotFound from "./NotFound";

const routes = [
  { path: "/", exact: true, component: Products, linkLabel: null },
  {
    path: "/products",
    exact: false,
    component: Products,
    linkLabel: "商品清單",
  },
  {
    path: "/activities",
    exact: false,
    component: Activities,
    linkLabel: "活動資訊",
  },
  { path: "/about", exact: false, component: About, linkLabel: "關於" },
  { path: null, exact: false, component: NotFound, linkLabel: null },
];

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          {routes.map((route) =>
            route.linkLabel ? (
              <div>
                <Link to={route.path}>{route.linkLabel}</Link>
              </div>
            ) : null
          )}
        </div>
        <div
          style={{
            display: "inline-block",
            width: "80%",
            border: "1px solid black",
          }}
        >
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
