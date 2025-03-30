import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-clicks");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
      
    return {
    good: 0,
    neutral: 0,
    bad: 0,
  }
});

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetClick = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <Section>
      <Container>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetClick={resetClick}
        />
        {totalFeedback === 0 ? <Notification /> : <Feedback clicks={clicks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>}
      </Container>
    </Section>
  );
};

export default App;
