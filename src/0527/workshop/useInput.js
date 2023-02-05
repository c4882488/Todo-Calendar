import { useState, useEffect } from "react";

const useInput = (initalValue, isRequired = false) => {
  const [value, setValue] = useState(initalValue);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const reset = () => {
    setValue(initalValue);
  };

  const handleChange = (e) => {
    const { type, value, checked } = e.target;
    setValue(type === "checkbox" ? checked : value);
    if (isRequired && (value === null || value === "" || value === undefined)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    if (isRequired && (value === null || value === "" || value === undefined)) {
      setErrorMessage("此欄位為必填欄位");
    } else {
      setErrorMessage(null);
    }
  }, [value, isRequired]);

  return {
    value,
    error,
    errorMessage,
    handleChange,
    reset,
  };
};

export default useInput;
