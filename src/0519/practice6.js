import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

let Products = (props) => (
  <div>
    <div>location is {JSON.stringify(props.location)}</div>
    <div>match is {JSON.stringify(props.match)}</div>
    <div>history is {JSON.stringify(props.history)}</div>
  </div>
);
Products = withRouter(Products);

function Pravtice6() {
  return (
    <Switch>
      {/* <Route path="/products/:productId" component={Products} />; */}
      <Route path="/products/:productId">
        <Products />
      </Route>
    </Switch>
  );
}

export default Pravtice6;
