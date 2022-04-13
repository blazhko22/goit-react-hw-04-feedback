import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

class Render extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleBtnClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good * 100) / total);
   
    return (

      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleBtnClick}
        />
        </Section>
        <Section title="Statistics">
          {total ?
            (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback} />)
            :
            (<Notification message="There is no feedback"></Notification>)
          }
        </Section>
      </div>
    );
  }
  
}

export default Render;
