import React from "react";
import { Switch, Route } from "react-router-dom";

const Courses = () => <div>I am Courses</div>;
const Products = (props) => (
  <div>the product id is {props.match.params.id}</div>
);
const NoMatch = () => <div>Not Found 404</div>;

function Pravtice5() {
  return (
    <Switch>
      <Route path="/:id" component={Products} />
      <Route path="/courses/" component={Courses} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default Pravtice5;
