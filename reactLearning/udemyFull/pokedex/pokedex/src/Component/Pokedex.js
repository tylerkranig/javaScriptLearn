import React from 'react';
import Pokecard from './Pokecard.js';
import '../Style/Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                <p>Total Exp:{this.props.exp} </p>
                <p>{this.props.isWinner ? 'Wins' : 'Loses' }</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />  
                    ))}   
                </div>     
            </div>
        );
    }
}




export default Pokedex;