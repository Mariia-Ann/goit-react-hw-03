import style from "./Feedback.module.css";
const Feedback = ({clicks, totalFeedback, positiveFeedback}) => {
  return (
    <div className={style.feedback}>
        <p>Good: {clicks.good}</p>
        <p>Neutral: {clicks.neutral}</p>
        <p>Bad: {clicks.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
    </div>
  )
}

export default Feedback;
