import React from 'react';
import '../Style/Pokecard.css';
const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => ( number <= 999 ? `00${number}`.slice(-3) : number )

class Pokecard extends React.Component {
    render() {
        const { id, name, type, exp } = this.props;
        let imgSrc = `${url}${padToThree(id)}.png`;
        return (
            <div className='Pokecard'>
               <h1 className="Pokecard-title">{name}</h1>
               <img src={imgSrc} />
               <div className="Pokecard-data">Type: {type}</div>
               <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        );
    }
}

export default Pokecard;