import React from "react";
import { Switch, Route } from "react-router-dom";

const Courses = (props) => <div>Hello, {props.match.params.name}</div>;

function Pravtice4() {
  return (
    <Switch>
      <Route path="/:name" component={Courses} />
      <Route path="/">
        <div>Hello</div>
      </Route>
    </Switch>
  );
}

export default Pravtice4;
