import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CardIncome from "../pages/cardIncome/CardIncome";
import CardSpendings from "../pages/cardSpendings/CardSpendings";
import Home from "../pages/home/Home";
import SpandingList from "../pages/spandingList/SpandingList";
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

  goBack = () => {
    this.props.history.push("/");
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
    //console.log(this.props);
    const { spendData, incomeData } = this.state;
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              spending={spendData}
              income={incomeData}
              togglleSpendings={this.togglleSpendings}
              togglleIncome={this.togglleIncome}
              {...props}
            />
          )}
        />
        <Route
          path="/spending"
          render={(props) => (
            <CardSpendings
              togglleSpendings={this.togglleSpendings}
              onHandlerSubmit={this.onHandlerSubmit}
              {...props}
            />
          )}
        />
        <Route
          path="/income"
          render={(props) => (
            <CardIncome
              togglleIncome={this.togglleIncome}
              onHandlerSubmit={this.onHandlerSubmit}
              {...props}
            />
          )}
        />
        <Route
          path="/list/:category"
          render={(props) => (
            <SpandingList
              incomeData={incomeData}
              spendData={spendData}
              {...props}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
