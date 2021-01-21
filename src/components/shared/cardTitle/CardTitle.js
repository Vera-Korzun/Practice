import React from "react";
import { withRouter } from "react-router-dom";

const CardTitle = ({ title, togglleCard, history }) => {
  const style = {
    display: "flex",
  };

  const goBackHome = () => {
    history.push("/");
  };

  return (
    <header sryle={style}>
      <button
        type="button"
        // onClick={togglleCard}
        onClick={goBackHome}
      >
        Go back
      </button>
      <h2>{title}</h2>
      <button type="submit">OK</button>
    </header>
  );
};

export default withRouter(CardTitle);
