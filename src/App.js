import React from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        // { name: "Monster1", id: "1" },
        // { name: "Monster2", id: "2" },
        // { name: "Monster3", id: "3" }
      ],
      searchString: ''
    }
  }

  async componentDidMount() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    )
    return (
      <div className="App">
      <SearchBox 
      placeholder= 'Search Monster'
      handleChange = {e => this.setState({searchString: e.target.value})}
      />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
