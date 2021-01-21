import React, { Component } from "react";
import moment from "moment";
import Form from "../../components/shared/form/Form";
import Input from "../../components/shared/input/Input";
import Select from "../../components/shared/select/Select";
import { income, currency } from "../../utils/data/selectOptions";
import CardTitle from "../../components/shared/cardTitle/CardTitle";

class CardIncome extends Component {
  state = {
    cardId: "income",
    date: moment(Date.now()).format("YYYY-MM-DD"),
    time: moment(Date.now()).format("HH:mm"),
    income: income.options[0].value,
    total: "",
    currency: currency.options[0].value,
  };

  onHandlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { cardId, ...data } = this.state;
    // console.log(cardId, data);
    this.props.onHandlerSubmit({ key: cardId, data });
    this.resetState();
    this.props.history.push({ pathname: "/" });
  };

  resetState = () => {
    this.setState({
      date: moment(Date.now()).format("YYYY-MM-DD"),
      time: moment(Date.now()).format("HH:mm"),
      income: income.options[0].value,
      total: "",
      currency: currency.options[0].value,
    });
  };

  render() {
    //console.log(this.state);
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <CardTitle title="Доходы" togglleCard={this.props.togglleIncome} />
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
