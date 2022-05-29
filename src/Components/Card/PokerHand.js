import {Component} from "react";


class PokerHand extends Component {
  constructor(cards) {
    super();

    this.cards = cards;
  }

  getCardsName = () => {
    const cardsArray = this.cards.map(card => {
      return {[card.suit]: card.rank};
    });

    const suitArray = [];
    for (let i = 0; i < this.cards.length; i++) {
      suitArray[this.cards[i].suit] = (suitArray[this.cards[i].suit] || 0) + 1;
    }
    this.howMany = Object.values(suitArray);

    const rankArray = [];
    for (let i = 0; i < this.cards.length; i++) {
      rankArray[this.cards[i].rank] = (rankArray[this.cards[i].rank] || 0) + 1;
    }
    this.sameNumber = Object.values(rankArray);
  }

  getOutcome () {
    this.getCardsName();
    let com = 'Неизвестно';
    let number = 0;

    for (let i = 0; i < this.sameNumber.length; i++) {
      if (this.sameNumber[i] === 4) {
        return com = 'Каре';
      } else if (this.howMany[0] === 5) {
        return com = 'Флэш';
      } else if (this.sameNumber[i] === 3) {
        return com = 'Тройка';
      } else if (this.sameNumber[i] === 2) number++;

    }

    if (number === 2) {
      return com = 'Две пары';
    } else if (number === 1) {
      return com = 'Одна пара';
    }

    return com;
  }
}

export default PokerHand;