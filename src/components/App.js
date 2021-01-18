import React, { Component } from "react";
import CardIncome from "./cardIncome/CardIncome";
import CardSpendings from "./cardSpendings/CardSpendings";
import Home from "./home/Home";

class App extends Component {
  state = {
    incomeIsOpen: false,
    spendIsOpen: false,
    home: true,
    spendData: [],
    incomeData: [],
  };
  componentDidMount() {
    const spending = localStorage.getItem("spending");
    const income = localStorage.getItem("income");
    if (spending) {
      this.setState({
        spendData: JSON.parse(spending),
      });
    }
    if (income) {
      this.setState({
        incomeData: JSON.parse(income),
      });
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.spendData !== this.state.spendData) {
      localStorage.setItem("spending", JSON.stringify(this.state.spendData));
    }
    if (prevState.incomeData !== this.state.incomeData) {
      localStorage.setItem("income", JSON.stringify(this.state.incomeData));
    }
  };

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

  onHandlerSubmit = ({ key, data }) => {
    if (key === "spending") {
      this.setState((prev) => ({
        spendData: [...prev.spendData, data],
      }));
      this.togglleSpendings();
    } else if (key === "income") {
      this.setState((prev) => ({
        incomeData: [...prev.incomeData, data],
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
