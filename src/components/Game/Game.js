import React, {Component} from "react";
import {Navbar} from "../Navbar";
import './Game.css';
import {Wrapper} from "../Wrapper";
import {PokemonCard} from "../PokemonCard";
import pokemons from "../../pokemons.json";


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pokemons: pokemons,
        score: 0,
        highestScore: 0
    };
  }

  render() {
		return (
			<div>
        <Navbar
          score={this.state.score}
          highestScore={this.state.highestScore}
        />
        <Wrapper className="col-md-12">
        <div className="jumbotron">
        <h2>Welcome to Pokemon Memory game!</h2>
        <h2> To play, you just need to click on the images below. Be carefull to not click at the same image twice.</h2>
        <h2> Have Fun!!!</h2>
      </div>
      <div className="col-md-4 flex">
          {this.state.pokemons.map((pokemon, index) =>{
            return <PokemonCard
              key={index}
              image={pokemon.image}
              id={pokemon.id}
              name={pokemon.name}
              index={index}
              handleClick={(index) => {
                this.handleClick(index);
              }}
              />
              }
              
            )
          }
          </div>
        </Wrapper>
			</div>
		)
  }

  shuffle(a) {
    //looping and moving objects from being next to eachother to shuffle/sorting
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick (index) {
    let {pokemons, score, prevScore} = this.state;



    if(!pokemons[index].clicked) {
      pokemons[index].clicked = true;
      score++;
    } else {
      pokemons = pokemons.map((pokemon, index) => {
        pokemon.clicked = false;
        return pokemon;
      });
      prevScore = score > prevScore ? score : prevScore;
      score = 0;
    }

    pokemons = this.shuffle(pokemons)

    this.setState({
      pokemons, score, prevScore
    })

  }
}





