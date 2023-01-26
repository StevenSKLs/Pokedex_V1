import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BarProgres from './BarProgres';
import RadarPlot from './RadarPlot';
import poke from '../assets/poke.svg'
import Pokemons from "./Pokemons";
import Loader from "./Loader";

const Pokedex_Id = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const [selectId, setselectId] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => setselectId(res.data))
    },[])


const [StatsChanges, setStatsChanges] = useState(false)
const StatsChange =()=>{
    setStatsChanges(!StatsChanges)
}

const contador = []
const contador2 = []
const array = selectId.stats?.map(stat1 =>(
contador.push({name: stat1.stat.name}),
contador2.push(stat1.base_stat)
))

const nuevo = contador.map((item, indice) => ({...item, star: contador2[indice]}))

let colorInd ={
    grass:{
      background: 'linear-gradient(0deg, rgba(1,29,1,1) 0%, rgba(21,121,9,1) 35%, rgba(0,241,255,1) 100%)'
    },
    normal:{
      background: 'linear-gradient(0deg, rgba(65,26,2,1) 0%, rgba(121,60,9,1) 38%, rgba(255,196,0,0.8519782913165266) 100%)'
    },
    fighting:{
      background: 'linear-gradient(0deg, rgba(29,20,1,1) 0%, rgba(121,60,9,1) 35%, rgba(255,149,0,1) 100%)'
    },
    flying:{
      background: 'linear-gradient(0deg, rgba(67,68,68,1) 0%, rgba(0,102,91,1) 38%, rgba(255,255,255,1) 100%)'
    },
    poison:{
      background: 'linear-gradient(0deg, rgba(30,1,42,1) 0%, rgba(88,9,121,1) 38%, rgba(255,0,206,1) 100%)'
    },
    ground:{
      background: 'linear-gradient(0deg, rgba(29,20,1,1) 0%, rgba(121,52,9,1) 35%, rgba(255,94,0,1) 100%)'
    },
    rock:{
      background: 'linear-gradient(0deg, rgba(59,59,59,1) 0%, rgba(221,221,221,1) 38%, rgba(170,170,170,1) 100%)'
    },
    bug:{
      background: 'linear-gradient(0deg, rgba(0,42,5,1) 0%, rgba(0,102,21,1) 38%, rgba(0,255,145,1) 100%)'
    },
    ghost:{
      background: 'linear-gradient(0deg, rgba(34,34,34,1) 0%, rgba(83,83,83,1) 38%, rgba(218,218,218,1) 100%)'
    },
    steel:{
      background: 'linear-gradient(0deg, rgba(68,68,67,1) 0%, rgba(96,96,96,1) 38%, rgba(0,1,255,1) 100%)'
    },
    fire:{
      background: 'linear-gradient(0deg, rgba(75,7,0,1) 0%, rgba(122,0,0,1) 38%, rgba(255,119,0,1) 100%)'
    },
     water:{
      background: 'linear-gradient(0deg, rgba(1,0,75,1) 0%, rgba(0,4,122,1) 38%, rgba(0,249,255,1) 100%)'
    },
    electric:{
      background: 'linear-gradient(0deg, rgba(63,75,0,1) 0%, rgba(121,122,0,1) 38%, rgba(245,255,0,1) 100%)'
    },
    psychic:{
      background: 'linear-gradient(0deg, rgba(53,0,75,1) 0%, rgba(115,0,122,1) 38%, rgba(245,255,0,1) 100%)'
    },
    ice:{
      background: 'llinear-gradient(0deg, rgba(0,6,75,1) 0%, rgba(0,103,122,1) 38%, rgba(254,254,254,1) 100%)'
    },
     dragon:{
      background: 'linear-gradient(0deg, rgba(75,0,0,1) 0%, rgba(117,0,0,1) 38%, rgba(237,251,0,1) 100%)'
    },
    dark:{
      background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(105,105,105,1) 38%, rgba(49,0,85,1) 100%)'
    },
    fairy:{
      background: 'linear-gradient(0deg, rgba(108,0,91,1) 0%, rgba(130,0,79,1) 38%, rgba(244,244,244,1) 100%)'
    }
  }
  
  const nameType = selectId.types?.[0].type?.name

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

  const [loader, setLoader] =useState(true)
  setTimeout(() => {
    setLoader(false)
    }, 5000)

    return (
        <div style={{background: 'gainsboro'}}>
            {loader && <Loader/>}
            <div className="card_input2">
          <img src={`${Pokemons[6]}`} alt="" className="img_input2"/>
          <img src={`${poke}`} alt="" className="img2_input2"/>
          </div>

          <button onClick={() => navigate(`/pokedex/`)} className='bootons'>Return... page</button>
          
            <div className='card_id'>
                <div style={colors} className='backgroms'>
                <img src={selectId.sprites?.other.dream_world.front_default} alt="" />
                </div>
            <div className='min_card_id'>
              <div>
                    <p>ID #{selectId.id}</p>
              </div>
        
            <h1>{selectId.name?.toUpperCase()}</h1>
          <hr className='hrs'/>
          <hr className='hrs2'/>
          <div className='info_2'>
              <div>
                  <p>Weight: </p>
              <b>{selectId.height}</b>
              </div>
            <div>
             <p>Height: </p>
            <b>{selectId.weight}</b> 
            </div>
            
            </div>
            <div className='card_stadic'>
              <div>
                 <h2>Type</h2>  
            <b className="types_info">{selectId.types?.map(type =>(    
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
        ))}</b>
              </div>
              <div>
                <h2>Abiliti</h2> 
        
        <b className="types_info">{selectId.abilities?.map(abiliti =>(
            <p key={abiliti.ability.url} className='types_p2'>{abiliti.ability.name}</p>
        ))}</b> 
              </div>
        
            </div>
            
            </div>  
            
            <div className='min_card_id'>
              <div className='stats_change'>
              <h2>Stats </h2>
            <button onClick={()=>StatsChange()}>Stats Change</button>
              </div>
                 {StatsChanges === false ?
            <div>{selectId.stats?.map(stat1 =>(
                <div key={stat1.stat.url}>
                  <div className='stats'>
                    <p>{stat1.stat.name}</p>
                <p>{stat1.base_stat} /150</p>
                  </div>
                {<BarProgres stadict ={stat1.base_stat}/>}
                
                </div>
            ))}</div>:<RadarPlot nuevo={nuevo} />}
            </div>
           
            </div>
            
        <div className='card_id'>
           <h2 className='card_moves'>Moves</h2>
            <div className='habilit'>{
                selectId.moves?.map(move =>(
                   <p key={move.move.url}>{move.move.name}</p> 
                ))
            }</div>
        </div>
        </div>
    );
};

export default Pokedex_Id;