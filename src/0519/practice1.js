import React from "react";
import { Switch, Route } from "react-router-dom";

const About = () => <div> I am About</div>;

function Pravtice1() {
  return (
    <Switch>
      <Route path="/" component={About} />
    </Switch>
  );
}

export default Pravtice1;
