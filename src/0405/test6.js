import React from "react";
import PropTypes from "prop-types";

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

Welcome.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default function App() {
  return <Welcome name="Steven" />;
}
