import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   name: 'Bagri',
    //   company: 'Creating',
    //   professions: { game: 'somthing', song: 'intrasting', orKya: 'SabKuch' },
    // };
    this.mon = {
      monster: [
        // {
        //   id: '123e45r',
        //   name: 'Linda',
        // },
        // {
        //   id: '123r45e',
        //   name: 'Frak',
        // },
        // {
        //   id: '123p45r',
        //   name: 'Andri',
        // },
      ],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((rep) => rep.json())
      .then((user) =>
        this.setState(() => {
          return { monster: user };
        })
      );
    console.log(rep);
  }
  // this.change = 'xyz';
  // }
  render() {
    return (
      <div>
        {/* <div>
          Hii I'm {this.state.name} And i work on {this.state.company}
          and my Profession is {this.state.professions.game} And
          {this.state.professions.song}
        </div> */}

        <div>This is the part of map function </div>
        <p>
          Hii I'm{' '}
          {this.mon.monster.map((e) => {
            return (
              <div>
                <strong key={e.id}>{e.name}</strong>
              </div>
            );
          })}
        </p>

        {/* <button
          onClick={() => {
            this.setState({
              name: 'Paras',
              company: 'verySoon',
              professions: { game: 'somth', song: 'intra', orKya: 'Sab' },
            });
          }}
        >
          Change
        </button> */}
        {/* <button
          onClick={() => {
            this.state = {
              brand: 'ABCD',
            };
            this.change = 'ABC';
            this.setState({ changea: 'ABCD' });
            console.log(`${(this.change = 'ABC')}`);
          }}
        >
          Change
        </button> */}
      </div>
    );
  }
}

export default App;
