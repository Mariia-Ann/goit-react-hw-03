import style from "./Options.module.css";

const Options = ({updateFeedback, totalFeedback, resetClick}) => {
  return (
    <div className={style.blockBtn}>
    <button className={style.btn} onClick={() => updateFeedback("good")}>Good</button>
    <button className={style.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
    <button className={style.btn} onClick={() => updateFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && <button className={style.btn} onClick={resetClick}>Reset</button>}
    </div>
  )
}

export default Options;
