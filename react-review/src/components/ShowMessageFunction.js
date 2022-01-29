import React, { useEffect, useState } from "react";

const ShowMessageFunction = ({ message }) => {
  // const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = event.target[0].value;

    // setMessage(msg);
  };

  // ComponentDidMount
  useEffect(() => {
    console.log("componente renderizado!");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("estado actualizado", message);

    // ComponentWillUnmount
    return () => {
      console.log("componente unmounted");
    };
  }, [message]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>{message}</h1>
      {/* <input />
      <button type="submit">Show Text</button> */}
    </form>
  );
};

export default ShowMessageFunction;
