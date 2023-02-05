import React from "react";
import { Switch, Route } from "react-router-dom";

const About = () => <div> I am About</div>;

function Pravtice1() {
  return (
    <Switch>
      <Route path={["/about", "/information"]}>
        <About />
      </Route>
      <Route path="/">
        <div>Hello</div>
      </Route>
    </Switch>
  );
}

export default Pravtice1;
