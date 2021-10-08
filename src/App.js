import "./index.css";
import s from "./components/Feedback/Feedback.module.css";
import Feedback from "./components/Feedback/Feedback";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

export default function App() {
  return (
    <>
      <p className={s.title}>Please leave feedback</p>
      <Feedback />
    </>
  );
}
