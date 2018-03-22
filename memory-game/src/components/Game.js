import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import PokemonCard from "./PokemonCard";
import pokemons from "../pokemons.json";


export default class Game extends React.Component {
    state = {
        pokemons: {},
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

render() {
		return (
			<div>
				<Navbar
					score={this.state.score}
					highestScore={this.state.highestScore}/>
						<Wrapper>
							<div className="col-md-12">
								{this.state.pokemons.map(character => {
									return <PokemonCard
										key={pokemon.id}
										id={pokemon.id}
										image={pokemon.image}
									/>
									}
								)}
							</div>
						</Wrapper>
			</div>
		)
	}
}