import {Component} from "react";
import './App.css';
import Card from './Components/Card/Card';
import CardDeck from './CardDeck';
import PokerHand from './PokerHand';


class App extends Component {
  state = {
    cards: [],
    pokerHand: 'Poker hand',
  }

  getCards = () => {
    const cardDeck = new CardDeck();
    const cards = cardDeck.getCards(5);

    this.setState({ cards });

    const pokerHand = new PokerHand(cards);
    const response = pokerHand.getOutcome();

    this.setState( {pokerHand: response});
  }

  render() {
    const cardsBlock = this.state.cards.map( (card, index) => {
      return (
        <Card rank={card.rank} suit={card.suit} key={index}/>
      );
    });

    return (
      <div className="playingCards poker-block">
        <div className="poker-hand">
          <span>{this.state.pokerHand}</span>
        </div>
        <div className="btn-block">
          <button onClick={this.getCards} type="button" className="btn">Раздать карты</button>
        </div>
        <div className="cards-block">
          {cardsBlock}
        </div>
      </div>
    );
  }
}

export default App;
