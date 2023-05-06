import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class SectionFeedbacks extends Component {
    render() {
      return (
    <section>
          <p>{this.props.title}</p>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this}></FeedbackOptions>
    </section>
    );
  }
};