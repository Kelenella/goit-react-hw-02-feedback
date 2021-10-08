import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions(props) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
    </div>
  );
}
