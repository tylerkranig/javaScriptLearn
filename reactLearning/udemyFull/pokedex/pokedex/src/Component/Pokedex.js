import React from 'react';
import Pokecard from './Pokecard.js';

var poke = [{}];

class Pokedex extends React.Component {
  

    componentDidMount() {
        for(let i = 0; i < 10; i++){
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then((res) => res.json())
            .then(data => {
                poke.push(data);
            })
        }
    }

    render() {
        return (
            <div>
                <Pokecard />
                <Pokecard />
            </div>
        );
    }
}




export default Pokedex;