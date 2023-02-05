import React from "react";
// 記得 import prop-types
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

// 指定型別檢查
Welcome.propTypes = {
  // phone 屬性必須為 string 型態且必需傳入
  phone: PropTypes.string.isRequired,
};

export default function App() {
  return <Welcome name="Steven" />;
}
