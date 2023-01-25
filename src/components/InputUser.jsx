import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";
import Loader from "./Loader";
import Pokemons from "./Pokemons";
import imgs from '../assets/sesped.webp'
import imgs2 from "../assets/pokemon-eu_3.jpg";


const InputUser = () => {
  const [loader, setLoader] =useState(true)

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
  
    const navigate = useNavigate();
  
    const clickButton = () => {
      dispatch(changeUserName(inputValue));
      navigate("/pokedex");
    };

    setTimeout(() => {
      setLoader(false)
      }, 5000)

    return (
      <div>
          {loader && <Loader/>}
          {/* <img src={`${Pokemons[1][1]}`} alt="" />
          <img src={`${Pokemons[1][3]}`} alt="" />
          <img src={`${Pokemons[1][0]}`} alt="" />
          <img src={`${Pokemons[2][1]}`} alt="" />
          <img src={`${Pokemons[2][2]}`} alt="" /> */}
          <div className="card_input">
          <img src={`${Pokemons[6]}`} alt=""/>
          {/* <img src={`${Pokemons[1][3]}`} alt="" /> */}
          <img src={`${imgs2}`} alt="" className="back_img"/>
          </div>
          <div className="primary_input">
            <div className="inputs">
          <h1>Input Name</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={clickButton}>Submit</button>
            </div>
            <div className="inputs">
            <img src={`${Pokemons[1][1]}`} alt="" />
            <h2  className="prueb">Welcom</h2>
            </div>
          </div>
          {/* <div>
            <img src={`${imgs}`} alt="" />
          </div> */}
          
      </div>
    )
}

export default InputUser;