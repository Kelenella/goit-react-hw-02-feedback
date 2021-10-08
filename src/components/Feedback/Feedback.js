import React from "react";
import "../../index.css";
import s from "./Feedback.module.css";

class Feedback extends React.Component {
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
  render() {
    return (
      <>
        <div className={s.btnGroup}>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleClickGood}
          >
            Good
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleClickNeutral}
          >
            Neutral
          </button>
          <button className={s.btn} type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <p className={s.title}>Statistics</p>
        <ul className={s.statisticList}>
          <li className={s.statisticItem}>
            <p className={s.name}>Good</p>
            <span className={s.value}>{this.state.good}</span>
          </li>
          <li className={s.statisticItem}>
            <p className={s.name}>Neutral</p>
            <span className={s.value}>{this.state.neutral}</span>
          </li>
          <li className={s.statisticItem}>
            <p className={s.name}>Bad</p>
            <span className={s.value}>{this.state.bad}</span>
          </li>
        </ul>
      </>
    );
  }
}
export default Feedback;
