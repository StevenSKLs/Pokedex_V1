import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

let colorInd ={
  grass:{
    background: 'linear-gradient(0deg, rgba(1,29,1,1) 0%, rgba(21,121,9,1) 35%, rgba(0,241,255,1) 100%)',
    border: '1px solid #416460', color:'#416460'
  },
  normal:{
    background: 'linear-gradient(0deg, rgba(65,26,2,1) 0%, rgba(121,60,9,1) 38%, rgba(255,196,0,0.8519782913165266) 100%)',
    border: '1px solid #735259', color:'#735259'
  },
  fighting:{
    background: 'linear-gradient(0deg, rgba(29,20,1,1) 0%, rgba(121,60,9,1) 35%, rgba(255,149,0,1) 100%)',
    border: '1px solid #96402A', color:'#96402A'
  },
  flying:{
    background: 'linear-gradient(0deg, rgba(67,68,68,1) 0%, rgba(0,102,91,1) 38%, rgba(255,255,255,1) 100%)',
    border: '1px solid #f19f08', color:'#f19f08'
  },
  poison:{
    background: 'linear-gradient(0deg, rgba(30,1,42,1) 0%, rgba(88,9,121,1) 38%, rgba(255,0,206,1) 100%)',
    border: '1px solid #5B3184', color:'#5B3184'
  },
  ground:{
    background: 'linear-gradient(0deg, rgba(29,20,1,1) 0%, rgba(121,52,9,1) 35%, rgba(255,94,0,1) 100%)',
    border: '1px solid #654008', color:'#654008'
  },
  rock:{
    background: 'linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(221,221,221,1) 38%, rgba(170,170,170,1) 100%)',
    border: '1px solid #7E7E7E', color:'#7E7E7E'
  },
  bug:{
    background: 'linear-gradient(0deg, rgba(0,42,5,1) 0%, rgba(0,102,21,1) 38%, rgba(0,255,145,1) 100%)',
    border: '1px solid #4AB648', color:'#4AB648'
  },
  ghost:{
    background: 'linear-gradient(0deg, rgba(34,34,34,1) 0%, rgba(83,83,83,1) 38%, rgba(218,218,218,1) 100%)',
    border: '1px solid #323569', color:'#323569'
  },
  steel:{
    background: 'linear-gradient(0deg, rgba(68,68,67,1) 0%, rgba(96,96,96,1) 38%, rgba(0,1,255,1) 100%)',
    border: '1px solid #5E736C', color:'#5E736C'
  },
  fire:{
    background: 'linear-gradient(0deg, rgba(75,7,0,1) 0%, rgba(122,0,0,1) 38%, rgba(255,119,0,1) 100%)',
    border: '1px solid #E75C35', color:'#E75C35'
  },
   water:{
    background: 'linear-gradient(0deg, rgba(1,0,75,1) 0%, rgba(0,4,122,1) 38%, rgba(0,249,255,1) 100%)',
    border: '1px solid #1479FB', color:'#1479FB'
  },
  electric:{
    background: 'linear-gradient(0deg, rgba(63,75,0,1) 0%, rgba(121,122,0,1) 38%, rgba(245,255,0,1) 100%)',
    border: '1px solid #0C1395', color:'#0C1395'
  },
  psychic:{
    background: 'linear-gradient(0deg, rgba(53,0,75,1) 0%, rgba(115,0,122,1) 38%, rgba(245,255,0,1) 100%)',
    border: '1px solid #ebeb0b', color:'#ebeb0b'
  },
  ice:{
    background: 'llinear-gradient(0deg, rgba(0,6,75,1) 0%, rgba(0,103,122,1) 38%, rgba(254,254,254,1) 100%)',
    border: '1px solid #6FBEDF', color:'#6FBEDF'
  },
   dragon:{
    background: 'linear-gradient(0deg, rgba(75,0,0,1) 0%, rgba(117,0,0,1) 38%, rgba(237,251,0,1) 100%)',
    border: '1px solid #478A93', color:'#478A93'
  },
  dark:{
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(105,105,105,1) 38%, rgba(49,0,85,1) 100%)',
    border: '1px solid #030706', color:'#030706'
  },
  fairy:{
    background: 'linear-gradient(0deg, rgba(108,0,91,1) 0%, rgba(130,0,79,1) 38%, rgba(244,244,244,1) 100%)',
    border: '1px solid #971B45', color:'#971B45'
  }
}

const nameType = character.types?.[0].type?.name

// const colors = nameType ===`${nameType}`?
// colorInd.nameType : colorInd.nameType

const colors = nameType ==='grass'?
colorInd.grass : nameType ==='normal'? 
colorInd.normal:nameType ==='fighting'?
colorInd.fighting:nameType ==='flying'?
colorInd.flying:nameType ==='poison'?
colorInd.poison:nameType ==='ground'?
colorInd.ground:nameType ==='rock'?
colorInd.rock:nameType ==='bug'?
colorInd.bug:nameType ==='ghost'?
colorInd.ghost:nameType ==='steel'?
colorInd.steel:nameType ==='fire'?
colorInd.fire:nameType ==='water'?
colorInd.water:nameType ==='electric'?
colorInd.electric:nameType ==='psychic'?
colorInd.psychic:nameType ==='ice'?
colorInd.ice:nameType ==='dragon'?
colorInd.dragon:nameType ==='dark'?
colorInd.dark:colorInd.fairy

  return (
    <div>
      <div className="card_pokedex" 
      onClick={() => navigate(`/pokedex/${character.id}`)}
      style={colors}
      >

        <img src={character.sprites?.other.dream_world.front_default} alt="" />
        <div className="poke_sub">
          <div className="tops">

          </div>
        <div
        className="card_info"
        onClick={() => navigate(`/pokedex/${character.id}`)}
      >
        <b><h2>{character.name?.toUpperCase()}</h2></b>
        
        <b className="types_info">{character.types?.map(type =>(
          <p key={type.type.url} className='types_p' style={ type.type.name ==='grass'?
          colorInd.grass : type.type.name ==='normal'? 
          colorInd.normal:type.type.name ==='fighting'?
          colorInd.fighting:type.type.name ==='flying'?
          colorInd.flying:type.type.name ==='poison'?
          colorInd.poison:type.type.name ==='ground'?
          colorInd.ground:type.type.name ==='rock'?
          colorInd.rock:type.type.name ==='bug'?
          colorInd.bug:type.type.name ==='ghost'?
          colorInd.ghost:type.type.name ==='steel'?
          colorInd.steel:type.type.name ==='fire'?
          colorInd.fire:type.type.name ==='water'?
          colorInd.water:type.type.name ==='electric'?
          colorInd.electric:type.type.name ==='psychic'?
          colorInd.psychic:type.type.name ==='ice'?
          colorInd.ice:type.type.name ==='dragon'?
          colorInd.dragon:type.type.name ==='dark'?
          colorInd.dark:colorInd.fairy
          }>
            {type.type.name}</p>
        ))}
        </b>
      </div>
      <div className="poke_info">
      <div>
        <p>{character.stats?.[0].stat.name}</p>
        <p>{character.stats?.[0].base_stat}</p>
      </div>
      <div>
        <p>{character.stats?.[1].stat.name}</p>
        <p>{character.stats?.[1].base_stat}</p>
      </div>
      <div>
        <p>{character.stats?.[2].stat.name}</p>
        <p>{character.stats?.[2].base_stat}</p>
      </div>
      <div>
        <p>{character.stats?.[5].stat.name}</p>
        <p>{character.stats?.[5].base_stat}</p>
      </div>
      </div>
     
        </div>
      
    </div>
    </div>
  );
};

export default CharacterCard;
