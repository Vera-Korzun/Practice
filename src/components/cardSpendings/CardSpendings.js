import React, { Component } from "react";
import Form from "../shared/form/Form";
import Input from "../shared/input/Input";
import Select from "../shared/select/Select";
import { outlay, currency } from "../data/selectOptions";
import moment from "moment";
import CardTitle from "../shared/cardTitle/CardTitle";

class CardSpendings extends Component {
  state = {
    date: moment(Date.now()).format("YYYY-MM-DD"),
    time: moment(Date.now()).format("HH:mm"),
    outlay: "",
    total: "",
  };

  onHandlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onHandlerSubmit({ ...this.state });
    this.resetState();
  };

  resetState = () => {
    this.setState({
      date: moment(Date.now()).format("YYYY-MM-DD"),
      time: moment(Date.now()).format("HH:mm"),
      outlay: "",
      total: "",
      currency: "",
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
