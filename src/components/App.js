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
  };

  togglleSpendings = () => {
    this.setState((prevState) => ({
      spendIsOpen: !prevState.spendIsOpen,
      home: !prevState.home,
    }));
  };

  onHandlerSubmit = (data) => {
    this.setState((prev) => ({
      spendData: [...prev.spendData, data],
    }));
    this.togglleSpendings();
  };

  render() {
    const { incomeIsOpen, spendIsOpen, home } = this.state;
    return (
      <>
        {home && <Home togglleSpendings={this.togglleSpendings} />}
        <hr />
        {spendIsOpen && (
          <CardSpendings
            togglleSpendings={this.togglleSpendings}
            onHandlerSubmit={this.onHandlerSubmit}
          />
        )}
        <hr />
        {incomeIsOpen && <CardIncome />}
      </>
    );
  }
}

export default App;
