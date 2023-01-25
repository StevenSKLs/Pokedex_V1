import detective_0 from '../assets/detective_0.gif'
import detective_1 from '../assets/detective_1.gif'
import detective_2 from '../assets/detective_2.gif'
import detective_3 from '../assets/detective_3.gif'
import detective_4 from '../assets/detective_4.gif'
import detective_5 from '../assets/detective_5.gif'
import detective_6 from '../assets/detective_6.gif'

import eve_0 from '../assets/eve_0.gif'
import eve_1 from '../assets/eve_1.gif'

import miu_0 from '../assets/miu_0.gif'
import miu_1 from '../assets/miu_1.gif'

import pichu_0 from '../assets/pichu_0.webp'
import pichu_1 from '../assets/pichu_1.gif'

import pikachu_0 from '../assets/pikachu_0.gif'
import pikachu_1 from '../assets/pikachu_1.gif'
import pikachu_2 from '../assets/pikachu_2.gif'
import pikachu_3 from '../assets/pikachu_3.gif'
import pikachu_4 from '../assets/pikachu_4.gif'

import pokeball_0 from '../assets/pokeball_0.gif'
import pokeball_1 from '../assets/pokeball_1.gif'
import pokeball_2 from '../assets/pokeball_2.gif'

import pokedex from "../assets/pokedex.svg";

import pokemonue_0 from '../assets/pokemon-eu_0.webp'
import pokemonue_1 from '../assets/pokemon-eu_1.webp'
import pokemonue_2 from '../assets/pokemon-eu_2.png'
import pokemonue_3 from '../assets/pokemon-eu_3.jpg'
import pokemonue_4 from '../assets/pokemon-eu_4.jpg'


const detective =[
    detective_0,
    detective_1,
    detective_2,
    detective_3,
    detective_4,
    detective_5,
    detective_6
]

const pikachu =[
    pikachu_0,
    pikachu_1,
    pikachu_2,
    pikachu_3,
    pikachu_4,
]

const pokeball =[
    pokeball_0,
    pokeball_1,
    pokeball_2,
]

const eve =[
    eve_0,
    eve_1,
]

const miu =[
    miu_0,
    miu_1,
]

const pichu =[
    pichu_0,
    pichu_1,
]

const pokemonue =[
    pokemonue_0,
    pokemonue_1,
    pokemonue_2,
    pokemonue_3,
    pokemonue_4,
]
    
const randoms = Math.floor(Math.random() * pokemonue.length)

const pokemons =[
    detective,
    pikachu,
    pokeball,
    eve,
    miu,
    pichu,
    pokedex,
    pokemonue[randoms],
]

export default pokemons

