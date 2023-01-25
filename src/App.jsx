import { HashRouter, Routes, Route} from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokedex_Id from "./components/Pokedex_Id";
import InputUser from "./components/InputUser";
import './App.css'
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputUser/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/pokedex/:id" element={<Pokedex_Id/>}/>
      </Route>

      </Routes>
    </HashRouter>
  )
}

export default App
