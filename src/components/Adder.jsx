import React from "react";

function Adder(props) {
  const setCount = props.setCount;
  function increaseCount() {
    setCount((curr) => {
      return curr + 1;
    });
  }
  return (
    <button
      style={{
        backgroundColor: "#CC8800",
        padding: "10px",
        borderRadius: "10px",
      }}
      onClick={increaseCount}
    >
      Increase The Count
    </button>
  );
}

export default Adder;
