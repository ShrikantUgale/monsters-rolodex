import React from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        // { name: "Monster1", id: "1" },
        // { name: "Monster2", id: "2" },
        // { name: "Monster3", id: "3" }
      ]
    }
  }

  async componentDidMount() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters} />
      </div>
    );
  }
}

export default App;
