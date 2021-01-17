import React from "react";

const CardTitle = ({ title, togglleCard, onHandlerSubmit }) => {
  const style = {
    display: "flex",
  };
  return (
    <header sryle={style}>
      <button type="button" onClick={togglleCard}>
        Go back
      </button>
      <h2>{title}</h2>
      <button type="submit">OK</button>
    </header>
  );
};

export default CardTitle;
