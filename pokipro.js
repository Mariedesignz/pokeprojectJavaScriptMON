import React, { Component } from "react";
export default class App extends Component {
  state = {
    pokemon: {
      results: []
    }
  };
  componentDidMount() {
    this.fetchPokemon();
  }
  fetchPokemon = async (
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12"
  ) => {
    const res = await fetch(url);
    const pokes = await res.json();
    this.setState({ pokemon: pokes });
    console.log(pokes);
  };
  next = () => {
    if (!this.state.pokemon.next) return;
    this.fetchPokemon(this.state.pokemon.next);
    // console.log("next");
  };
  previous = () => {
    if (!this.state.pokemon.previous) return;
    this.fetchPokemon(this.state.pokemon.previous);
    // console.log("previous");
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <img
            className="header-logo"
            src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pokedex.png"
            alt="pokedex logo"
          />
          <h1>Pok&eacute;dex</h1>
        </div>
        <div id="main-content">
          <ul>
            {this.state.pokemon.results.map(poke => (
              <li className="poke-card" key={poke.name}>
                <h3>{poke.name}</h3>
              </li>
            ))}
          </ul>
          <button id="previous" className="btn" onClick={this.previous}>
            Previous
          </button>
          <button id="next" className="btn" onClick={this.next}>
            Next
          </button>
        </div>
        <img
          id="pikachu"
          className="hvr-hang"
          src="https://raw.githubusercontent.com/CodeLouisville/FSJS-Weekly-Challenges/master/Challenges/Week5/images/pikachu.png"
          alt="Pikachu"
        />
      </div>
    );
  }
}