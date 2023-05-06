import { Component } from 'react';
import { SectionFeedbacks } from './SectionFeedbacks/SectionFeedbacks';
import { SectionStats } from './SectionStats/SectionStats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    return (
      <div>
      <SectionFeedbacks title="Please leave feedback" />
      <SectionStats title="Statistics" />
      </div>
    )
  }
};

// створити мепом три кнопки за масивом в props options. всередині мепу кожній кнопці передаємо проп наприклад:
// () => onLeaveFeedback(label тут буде гуд чи бед) i тоді setState буде {[option]: state[option] + 1} таким чином оновлювати state
// в onLeaveFeedback передати метод, який отримуватиме одне зі значень (гуд або бед)
