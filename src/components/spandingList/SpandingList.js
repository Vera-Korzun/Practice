import React, { useState } from "react";
import Button from "../shared/button/Button";
import Section from "../shared/section/Section";
import Select from "../shared/select/Select";
import Input from "../shared/input/Input";
import { spendingList } from "../data/selectOptions";
import moment from "moment";

const SpandingList = ({ spendData }) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const categoriesResult = (data) => {
    const uniqCategory = data
      .map((item) => item.outlay)
      .filter((el, index, array) => array.indexOf(el) === index);
    //console.log(uniqCategory);
    return uniqCategory
      .map((category) =>
        data
          .filter((element) => element.outlay === category)
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
  const categorieList = categoriesResult(spendData);

  return (
    <Section>
      <header>
        <Button title="Go back" />
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

export default SpandingList;
