import { Component } from 'react';

export class FeedbackOptions extends Component {
    plusFeedback = () => {
        console.log(this.props.options);
    };
    
    render() {
        return (
            <div>
                {this.props.options.map((option) =>
                    <button type='button' onClick={this.plusFeedback}>{option}</button>
                )}
            </div>
        );
  }
};