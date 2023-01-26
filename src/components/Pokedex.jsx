import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./PokemonCrad";
import Loader from "./Loader";
import Paginate from './Paginate'
import poke from '../assets/poke.svg'
import Pokemons from "./Pokemons";

const Pokedex = () => {
    const userName = useSelector((state) => state.userName)

    const [pokedexs, setpokedexs] = useState([])
    const [pokedexType, setpokedexType] = useState([])
  
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
        .then((res) => setpokedexs(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
        .then((res) => setpokedexType(res.data.results));
    }, []);

    const [inputs, setInputs] = useState("")

    const navigate = useNavigate()

    const result = ()=>{
        navigate(`/pokedex/${inputs.toLowerCase()}`)
    }
  
    const filterpokemon = e =>{
        axios.get(e.target.value).then(res => setpokedexs(res.data.pokemon))
        retro()
    }


    const [page, setPage] = useState(1)
    // const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
  
    const lastPage = page * postsPerPage;
    const firstPage = lastPage - postsPerPage;

    const UsersPaginated = pokedexs.slice(firstPage, lastPage);
    const paginate = pageNumber => setPage(pageNumber);

    const [loader, setLoader] =useState(true)
    setTimeout(() => {
      setLoader(false)
      }, 5000)

    const retro = ()=>{
      setPage(1)
    }

    return (
      <div>
        {loader && <Loader/>}
    
        <div className="card_input2">
          <img src={`${Pokemons[6]}`} alt="" className="img_input2"/>
          <img src={`${poke}`} alt="" className="img2_input2"/>
          </div>
        

        <div style={{margin: '0 3vh'}}>
        <h1>Welcome to your pokedex</h1>
        <p>Pokemon Trainer  {userName}!</p>
        
        <div className="card_fetch">
        <div className="card2_fetch">
            <input type="text" 
            placeholder="look for pokemon"
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
            />
            <button onClick={result}>GO</button>
        </div>
        
        <div>
            <select onChange={filterpokemon} name="" id="" className="select_type">
                {pokedexType.map(pokemonType =>(
                    <option value={pokemonType.url} key={pokemonType.url}>{pokemonType.name}
                    </option>
                ))}
            </select>
        </div>
        </div>

<Paginate
        postsPerPage={postsPerPage}
        totalPosts={pokedexs.length}
        paginate={paginate}
        page={page}
      />


        <div className="card_primary">
          {UsersPaginated.map((character) => (
            <CharacterCard 
            url={character.url ? character.url: character.pokemon.url} 
            key={character.url ? character.url: character.pokemon.url} />
          ))}
        </div>
        <Paginate
        postsPerPage={postsPerPage}
        totalPosts={pokedexs.length}
        paginate={paginate}
        page={page}
      />
      </div>
  
   </div>
    )
}

export default Pokedex