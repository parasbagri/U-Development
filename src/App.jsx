import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchFiled);
    });

    return (
      <div>
        <input
          type="search"
          className="search-box"
          placeholder="Enter Names"
          onChange={(event) => {
            console.log(event);
            // const filteredMonsters = this.state.monsters.filter((monster) => {
            //   return monster.name
            //     .toLowerCase()
            //     .includes(event.target.value.toLowerCase());
            // });
            const searchFiled = event.target.value.toLocaleLowerCase();
            // this.setState({ monsters: filteredMonsters });
            this.setState(() => {
              return { searchFiled };
            });
          }}
        />
        {/* {this.state.monsters.map((e) => {
          return <h2 key={e.id}>{e.name}</h2>;
        })} */}
        {/* Using component here 
        {filteredMonsters.map((e) => {
          return <h2 key={e.id}>{e.name}</h2>;
        })} */}
        <CardList name={"Hello I'm Paras"} />
      </div>
    );
  }
}

export default App;
