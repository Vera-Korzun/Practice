import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "../../components/shared/button/Button";
import Section from "../../components/shared/section/Section";
import Select from "../../components/shared/select/Select";
import Input from "../../components/shared/input/Input";
import { spendingList } from "../../utils/data/selectOptions";
import moment from "moment";

const SpandingList = ({ spendData, incomeData, match, history }) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const { category } = match.params;

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const goBack = () => history.push("/");

  const categoriesResult = (data, cat) => {
    const uniqCategory = data
      .map((item) => item[cat])
      .filter((el, index, array) => array.indexOf(el) === index);
    //console.log(uniqCategory);
    return uniqCategory
      .map((category) =>
        data
          .filter((element) => element[cat] === category)
          .reduce((acc, obj) => {
            const total = Number(obj.total);
            return {
              category,
              total: acc.total ? acc.total + total : total,
            };
          }, {})
      )
      .filter((item) => item.total > 0);
  };

  //console.log(categoriesResult(spendData));
  const categorieList =
    category === "income"
      ? categoriesResult(incomeData, category)
      : category === "outlay"
      ? categoriesResult(spendData, category)
      : [];

  return (
    <Section>
      <header>
        <Button title="Go back" onClick={goBack} />
        <Select sets={spendingList} />
      </header>
      <Button title="Go left" />
      <Input type="date" name="date" value={date} onChange={handleDate} />
      <Button title="Go right" />

      <h2>Всего: 0,00</h2>
      <ul>
        {categorieList.map((item) => (
          <li key={item.category}>
            <span>{item.category}</span>
            <span>{item.total}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default withRouter(SpandingList);
