import {Component} from "react";


class PokerHand extends Component {
  constructor(cards) {
    super();

    this.cards = cards;
  }

  getCardsName = () => {
    const getCopyCards = [...this.cards];
    const getCopyCardsRank = [];
    getCopyCards.forEach(card => {
      getCopyCardsRank.push(card.rank);
    });

    const numberArray = [];
    for (let i = 0; i < getCopyCardsRank.length; i++) {
      if (getCopyCardsRank[i] === 'j') {
        getCopyCardsRank[i] = '11';
        numberArray.push(getCopyCardsRank[i]);
      } else if (getCopyCardsRank[i] === 'q') {
        getCopyCardsRank[i] = '12';
        numberArray.push(getCopyCardsRank[i]);
      } else if (getCopyCardsRank[i] === 'k') {
        getCopyCardsRank[i] = '13';
        numberArray.push(getCopyCardsRank[i]);
      } else if (getCopyCardsRank[i] === 'a') {
        getCopyCardsRank[i] = '14';
        numberArray.push(getCopyCardsRank[i]);
      } else {
        numberArray.push(getCopyCardsRank[i]);
      }
    }

    numberArray.sort((a, b) => {
      return a - b;
    });

    const royalFlushCom = ['10', '11', '12', '13', '14'];

    this.finedRoyalCom = [];
    const checkEvenCards = () => {
      for (let i = 0; i < royalFlushCom.length; i++) {
        if (royalFlushCom[i] === numberArray[i]) this.finedRoyalCom.push(royalFlushCom[i]);
      }
    };

    checkEvenCards();

    this.sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
      if (parseInt(numberArray[i]) === parseInt(numberArray[i + 1]) - 1
        || parseInt(numberArray[i]) === parseInt(numberArray[i - 1]) + 1 ){
        this.sum++;
      }
      if (numberArray[i] === '14' && numberArray[0] === '2'
        && numberArray[1] === '3' && numberArray[2] === '4' && numberArray[3] === '5' ) {
        this.sum++;
      }

    }

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
    let response = 'обычная';
    let number = 0;

    if (this.finedRoyalCom.length === 5 && this.howMany[0] === 5) {
      return response = 'Рояль-флэш';
    } else if (this.sum === 5 && this.howMany[0] === 5) {
      return response = 'Стрит-флэш';
    }

    for (let i = 0; i < this.sameNumber.length; i++) {
      if (this.sameNumber[i] === 2) number++;
    }

    for (let i = 0; i < this.sameNumber.length; i++) {
      if (this.sameNumber[i] === 3 && number === 1) {
        return response = 'Фул-хаус';
      } else if (this.sameNumber[i] === 4) {
        return response = 'Каре';
      } else if (this.howMany[0] === 5) {
        return response = 'Флэш';
      } else if (this.sum === 5) {
        return response = 'Стрит';
      }else if (this.sameNumber[i] === 3) {
        return response = 'Тройка';
      }
    }

    if (number === 2) {
      return response = 'Две пары';
    } else if (number === 1) {
      return response = 'Одна пара';
    }

    return response;
  }
}

export default PokerHand;