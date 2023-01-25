import React from 'react';
import Pokemons from "./Pokemons";
import pokeball from '../assets/pokebola.png'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={`${Pokemons[2][0]}`} alt="" />
            <div className='min-loader'>
                <p>Loading...</p>
                 <img src={`${pokeball}`} alt="" className='rotate'/>
            </div>
            
        </div>
    );
};

export default Loader;