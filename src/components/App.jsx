import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Section/Statistics/Statistics';
import { Notification } from './Section/Notification/Notification';
import css from '../components/App.module.css'

export class App extends Component {
  
state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
 
  

  onLeaveFeedback = (option) => {
    this.setState({
      [option]: this.state[option] + 1
    })
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbacksPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round(((good + neutral) / total) * 100) : 0;
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
          </Section>
        <Section title="Statistics">
          {this.countTotalFeedbacks() > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedbacks()} positivePercentage={this.countPositiveFeedbacksPercentage()}></Statistics>
            ) : (
            <Notification message="There is no feedback"></Notification>
            )}
            </Section>
      </div>
    )
  }
};

