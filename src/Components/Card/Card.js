import {Component} from "react";
import './cards.css';
import './card.css'

class Card extends Component {
  getClasses = () => {
    let classes = `card rank-${this.props.rank}`;

    if (this.props.suit === '♥') {
      classes += ' hearts';
    } else if (this.props.suit === '♦') {
      classes += ' diams';
    } else if (this.props.suit === '♠') {
      classes += ' spades';
    } if (this.props.suit === '♣') {
      classes += ' clubs';
    }

    return classes;
  }

  render() {
    return (
      <div className={this.getClasses()}>
        <span className="rank text-uppercase">{this.props.rank}</span>
        <span className="suit">{this.props.suit}</span>
      </div>
    );
  }
}

export default Card;