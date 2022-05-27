import {Component} from "react";
import './App.css';
import Card from './Components/Card/Card';
import CardDeck from './Components/Card/CardDeck';


class App extends Component {
  state = {
    cards: [],
  }

  getCards () {
    const cardDeck = new CardDeck();
    const cards = cardDeck.getCards(5);

    this.setState({ cards });
  }

  render() {
    const cardsBlock = this.state.cards.map( card => {
      return (
        <Card rank={card.rank} suit={card.suit}/>
      );
    });

    return (
      <div className="playingCards poker-block">
        {cardsBlock}
      </div>
    );
  }
}

export default App;
