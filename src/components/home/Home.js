import React from "react";
import CountTotal from "../data/countTotal";

import Section from "../shared/section/Section";

const Home = ({ togglleSpendings, togglleIncome, spending, income }) => {
  const counter = new CountTotal();

  return (
    <Section>
      <div>
        <h2>Расходы</h2>
        <p>RUB</p>
        <ul>
          <li>сегодня:{counter.countDayTotal(spending)}</li>
          <li>неделя:{counter.countWeekTotal(spending)}</li>
          <li>месяц:{counter.countMonthTotal(spending)}</li>
        </ul>
        <button type="button" onClick={togglleSpendings}>
          +
        </button>
      </div>
      <div>
        <h2>Доходы</h2>
        <p>RUB</p>
        <ul>
          <li>месяц:{counter.countMonthTotal(income)}</li>
        </ul>
        <button type="button" onClick={togglleIncome}>
          +
        </button>
      </div>
    </Section>
  );
};

export default Home;
