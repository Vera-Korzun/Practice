import React, { Component } from "react";
import Form from "../shared/form/Form";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import { income, currency } from "../data/selectOptions";
import moment from "moment";
import CardTitle from "../shared/cardTitle/CardTitle";

class CardIncome extends Component {
  state = {
    date: moment(Date.now()).format("YYYY-MM-DD"),
    time: moment(Date.now()).format("HH:mm"),
    income: "",
    total: "",
    currency: "",
  };

  onHandlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Form>
          <CardTitle title="Доходы" />
          <Input
            title="Day"
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.onHandlerChange}
          />
          <Input
            title="Time"
            type="time"
            name="time"
            value={this.state.time}
            onChange={this.onHandlerChange}
          />
          <Select
            value={this.state.income}
            sets={income}
            onChange={this.onHandlerChange}
          />
          <Input
            title="Price"
            name="total"
            value={this.state.total}
            placeholder="Enter price"
            onChange={this.onHandlerChange}
          />
          <Select sets={currency} onChange={this.onHandlerChange} />
        </Form>
      </>
    );
  }
}

export default CardIncome;
