import React, { Component } from "react";
import "./index.css";
import Container from "./components/Container";
import s from "./components/Feedback/Feedback.module.css";
import Feedback from "./components/Feedback";
// import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <p className={s.title}>Please leave feedback</p>

        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onHandleGood={this.handleClickGood}
          onHandleNeutral={this.handleClickNeutral}
          onHandleBad={this.handleClickBad}
        />
        <div className={s.statisticItem}>
          <p className={s.name}>Total:</p>
          <span className={s.value}>{good + neutral + bad}</span>
        </div>
      </Container>
    );
  }
}
export default App;
