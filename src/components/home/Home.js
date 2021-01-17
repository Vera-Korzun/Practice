import React from "react";

const Home = ({ togglleSpendings }) => {
  return (
    <>
      <h2>Расходы</h2>
      <p>RUB</p>
      <ul>
        <li>сегодня:0,00</li>
        <li>неделя:0,00</li>
        <li>месяц:0,00</li>
      </ul>
      <button type="button" onClick={togglleSpendings}>
        +
      </button>
    </>
  );
};

export default Home;
