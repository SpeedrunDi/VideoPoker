import {Component} from "react";
import './App.css';
import Card from './Components/Card/Card';



class App extends Component {
  render() {
    return (
      <div className="playingCards poker-block">
        <Card rank='k' suit='♦' />
      </div>
    );
  }
}

export default App;
