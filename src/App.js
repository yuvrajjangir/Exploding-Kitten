import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes ,Route} from "react-router-dom";


import {useNavigate} from "react-router-dom";

import Header from "./components/Nav";
import GamePlayArea from "./pages/Game";

import GameLobby from "./pages/MainPage";

const App = () => {
      let history =useNavigate();   
       const [isLobby, setisLobby] = useState(true)
       
      const user = JSON.parse(localStorage.getItem("user"));
      
      
      useEffect(() => {
        if(!user){
          history('/')
       }else{
         history('/playGame')
       }
 
      }, [])
      
      const setIsLobby =(value)=>{
          setisLobby(value)
      }

      
  return (
   <div className="h-[100vh] relative overflow-hidden">
    <Header setIsLobby={setIsLobby} isLobby={isLobby} />
      <Routes>
      <Route path="/" exact element={<GameLobby setIsLobby={setIsLobby} isLobby={isLobby}/>} />
      <Route path="/playGame" exact element={<GamePlayArea setIsLobby={setIsLobby} isLobby={isLobby}/>} isPrivate />
     </Routes>
    </div>
   
       
  );
};

export default App;
