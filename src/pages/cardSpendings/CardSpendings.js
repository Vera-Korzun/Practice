import React, { Component } from "react";
import Form from "../../components/shared/form/Form";
import Input from "../../components/shared/input/Input";
import Select from "../../components/shared/select/Select";
import { outlay, currency } from "../../utils/data/selectOptions";
import moment from "moment";
import CardTitle from "../../components/shared/cardTitle/CardTitle";

class CardSpendings extends Component {
  state = {
    cardId: "spending",
    date: moment(Date.now()).format("YYYY-MM-DD"),
    time: moment(Date.now()).format("HH:mm"),
    outlay: outlay.options[0].value,
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
    //console.log(cardId, data);
    this.props.onHandlerSubmit({ key: cardId, data: data });
    this.resetState();
    this.props.history.push({ pathname: "/" });
  };

  resetState = () => {
    this.setState({
      date: moment(Date.now()).format("YYYY-MM-DD"),
      time: moment(Date.now()).format("HH:mm"),
      outlay: outlay.options[0].value,
      total: "",
      currency: currency.options[0].value,
    });
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <CardTitle
            title="Расходы"
            togglleCard={this.props.togglleSpendings}
          />
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
            value={this.state.outlay}
            sets={outlay}
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

export default CardSpendings;
