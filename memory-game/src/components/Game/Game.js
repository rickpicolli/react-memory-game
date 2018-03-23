import React, {Component} from "react";
import {Navbar} from "../Navbar";
import {Wrapper} from "../Wrapper";
import {PokemonCard} from "../PokemonCard";
import pokemons from "../../pokemons.json";


export default class Game extends Component {
    state = {
        pokemons: pokemons,
        score: 0,
        highestScore: 0
    };


// const App = () => (
//   <Wrapper>
//     <PokemonCard
//       image={pokemons[0].image}
//     />
//     <PokemonCard
//       image={pokemons[1].image}
//     />
//     <PokemonCard
//       image={pokemons[2].image}
//     />
//   </Wrapper>
// );


//shuffled.foreach => (card)



render() {
		return (
			<div>
        <Navbar
          score={this.state.score}
          highestScore={this.state.highestScore}
        />
        <Wrapper className="col-md-12">
        <div className="col-md-12">
          {this.state.pokemons.map(pokemon =>{
            return <PokemonCard
              key={pokemon.id}
              image={pokemon.image}
              id={pokemon.id}
              name={pokemon.name}
              />
              }
            )
          }
          </div>
        </Wrapper>
			</div>
		)
  }
}
