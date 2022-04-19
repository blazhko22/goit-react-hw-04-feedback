import React, { useState, useEffect } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

function Render() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setFeedback(Math.round((good * 100) / total));
  }, [good, neutral, bad, total]);
  const handleBtnClick = (e) => {
    switch (e.currentTarget.textContent) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      default:
        break;
    }
  }  
     
  return (

    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleBtnClick}
      />
      </Section>
      <Section title="Statistics">
        {total ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={feedback} />)
            :
            (<Notification message="There is no feedback"></Notification>)
        }
      </Section>
    </div>
  );    
}

export default Render;
