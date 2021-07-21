import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';

import { CardList } from './Components/Cardlist/cardList.component';
import { SearchBox } from './Components/SearchBox/searchBox.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster}/>
      </div>
    );
  }
  
}

export default App;
