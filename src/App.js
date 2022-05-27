import {Component} from "react";
import './App.css';
import Card from './Components/Card/Card';
import CardDeck from './Components/Card/CardDeck';


class App extends Component {
  state = {
    cards: [],
  }

  getCards = () => {
    const cardDeck = new CardDeck();
    const cards = cardDeck.getCards(5);

    this.setState({ cards });
  }

  render() {
    const cardsBlock = this.state.cards.map( (card, index) => {
      return (
        <Card rank={card.rank} suit={card.suit} key={index}/>
      );
    });

    return (
      <div className="playingCards poker-block">
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
