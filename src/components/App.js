import React, { Component } from "react";
import CardIncome from "./cardIncome/CardIncome";
import CardSpendings from "./cardSpendings/CardSpendings";
import Home from "./home/Home";
import SpandingList from "./spandingList/SpandingList";
import ApiServicesClass from "../services/apiServicesClass";

class App extends Component {
  state = {
    incomeIsOpen: false,
    spendIsOpen: false,
    home: true,
    spendData: [],
    incomeData: [],
  };

  api = new ApiServicesClass();

  async componentDidMount() {
    const spending = await this.api.getSpending();
    const income = await this.api.getIncome();
    if (spending) {
      this.setState({
        spendData: spending,
      });
    }
    if (income) {
      this.setState({
        incomeData: income,
      });
    }
  }

  togglleSpendings = () => {
    this.setState((prevState) => ({
      spendIsOpen: !prevState.spendIsOpen,
      home: !prevState.home,
    }));
  };

  togglleIncome = () => {
    this.setState((prevState) => ({
      incomeIsOpen: !prevState.incomeIsOpen,
      home: !prevState.home,
    }));
  };

  onHandlerSubmit = async ({ key, data }) => {
    const responseData = await this.api.post(key, data);
    if (key === "spending") {
      this.setState((prev) => ({
        spendData: [...prev.spendData, responseData],
      }));
      this.togglleSpendings();
    } else if (key === "income") {
      this.setState((prev) => ({
        incomeData: [...prev.incomeData, responseData],
      }));
      this.togglleIncome();
    }
  };

  render() {
    const {
      incomeIsOpen,
      spendIsOpen,
      home,
      spendData,
      incomeData,
    } = this.state;
    return (
      <>
        {home && (
          <Home
            spending={spendData}
            income={incomeData}
            togglleSpendings={this.togglleSpendings}
            togglleIncome={this.togglleIncome}
          />
        )}
        <hr />
        {spendIsOpen && (
          <CardSpendings
            togglleSpendings={this.togglleSpendings}
            onHandlerSubmit={this.onHandlerSubmit}
          />
        )}
        <hr />
        {incomeIsOpen && (
          <CardIncome
            togglleIncome={this.togglleIncome}
            onHandlerSubmit={this.onHandlerSubmit}
          />
        )}
        <hr />
        {spendData.length > 0 && <SpandingList spendData={spendData} />}

        {/* <Home togglleSpendings={this.togglleSpendings} />
        <hr />
        <CardSpendings
          togglleSpendings={this.togglleSpendings}
          onHandlerSubmit={this.onHandlerSubmit}
        />
        <hr />
        <CardIncome /> */}
      </>
    );
  }
}

export default App;
