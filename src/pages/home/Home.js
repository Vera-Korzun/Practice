import React from "react";
import { NavLink } from "react-router-dom";
import CountTotal from "../../utils/data/countTotal";
import Section from "../../components/shared/section/Section";

const Home = ({ togglleSpendings, togglleIncome, spending, income }) => {
  const counter = new CountTotal();
  //console.log("spending", spending);

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
        <NavLink to="/spending">+</NavLink>
      </div>
      <div>
        <h2>Доходы</h2>
        <p>RUB</p>
        <ul>
          <li>месяц:{counter.countMonthTotal(income)}</li>
        </ul>
        <NavLink to="/income">+</NavLink>
      </div>
      <div>
        <NavLink to="/list/income">Все доходы</NavLink>
        <NavLink to="/list/outlay">Все расходы</NavLink>
      </div>
    </Section>
  );
};

export default Home;
