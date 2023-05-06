import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class SectionStats extends Component {
    render() {
        return (
        <section>
          <p>{this.props.title}</p>
        <Statistics good={this} neutral={this} bad={this} total={this} positivePercentage={this}></Statistics>
        <Notification message="There is no feedback"></Notification>
        </section>
    )
  }
};