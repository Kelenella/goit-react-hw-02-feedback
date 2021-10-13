import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,

  onHandleGood,
  onHandleNeutral,
  onHandleBad,
  onCountTotal,
}) => (
  <>
    <div className={s.btnGroup}>
      <button className={s.btn} type="button" onClick={onHandleGood}>
        Good
      </button>
      <button className={s.btn} type="button" onClick={onHandleNeutral}>
        Neutral
      </button>
      <button className={s.btn} type="button" onClick={onHandleBad}>
        Bad
      </button>
    </div>
    <p className={s.title}>Statistics</p>
    <ul className={s.statisticList}>
      <li className={s.statisticItem}>
        <p className={s.name}>Good</p>
        <span className={s.value}>{good}</span>
      </li>
      <li className={s.statisticItem}>
        <p className={s.name}>Neutral</p>
        <span className={s.value}>{neutral}</span>
      </li>
      <li className={s.statisticItem}>
        <p className={s.name}>Bad</p>
        <span className={s.value}>{bad}</span>
      </li>
    </ul>
  </>
);
export default Feedback;
