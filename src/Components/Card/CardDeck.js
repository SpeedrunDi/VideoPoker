import {Component} from "react";
import './cards.css';

class CardDeck extends Component {
  data = {
    suits: ['♥', '♦', '♠', '♣'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'],
  }

  constructor() {
    super();
    this.arrayCards = [];

    for (let i = 0; i < this.data.suits.length; i++) {
      for (let j = 0; j < this.data.ranks.length; j++) {
        this.arrayCards.push({suit: this.data.suits[i], rank: this.data.ranks[j]});
      }
    }
  }

  getCard = () => {
    const indexCard = Math.floor(Math.random() * this.arrayCards.length);
    return  this.arrayCards.splice(indexCard, 1);
  }

  getCards = (howMany) => {
    const randomCards = [];
    while (howMany) {
      randomCards.push(this.getCard());
      howMany--;
    }
    return randomCards;
  }
}

export default CardDeck;