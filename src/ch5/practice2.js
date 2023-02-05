import React from "react";

function Welcome(props) {
  const { phone } = props;
  const formattedPhone =
    phone.substring(0, 4) +
    "-" +
    phone.substring(4, 7) +
    "-" +
    phone.substring(7);
  return (
    <div>
      <h1>Hi, {props.name}</h1>
      <h1>your phone number is {formattedPhone}</h1>
    </div>
  );
}

export default function App() {
  return <Welcome name="Steven" phone="1234567890" />;
}
