import "./App.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
// import { useState } from "react";


function App() {
  // const [temp , setTemp] = useState([]);
  // const [humidity , setHumidity] =useState([]);
  // const [wind ,setWind] = useState([])
  
  // const ApiKey = "295301f72a00bf4a1068bd8b34c1984a" 
  // const urlapi = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=${ApiKey}`
  
  // function climateinfo(){
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=${ApiKey}`)
  //   .then(resp => console.log(resp.json()));
    
  // }
  // climateinfo()


  return (
    <>
      <div className="container flex-col justify-center items-center relative w-2/3 m-auto  bg-white rounded-xl border py-3  px-3 overflow-hidden transition-all">
        <div className="search-box flex justify-center items-center gap-4 mb-5 h-min">
          <span className="p-2">
          <FaLocationDot style={{fontSize:"16px"}}/>
          </span>
          
          <input
            type="text"
            placeholder="Enter your location"
            className="text-slate-700 w-4/5 font-semibold outline-none"
          />
          <button className="cursor-pointer bg-blue-200 p-2 rounded-full"><FaSearch  style={{fontSize:"16px"}}/></button>
        </div>

        <div className="not-found flex-cal justify-center items-center p-2 m-auto w-full hidden">
          <img src="/src/assets/404.png" alt="notFoundPic" className="w-2/3 m-auto"/>
          <h2 className="text-2xl font-bold">Opps! Invalid location</h2>
        </div>

        <div className="weather-box text-center flex-col">
          <img src="src/assets/clear.png" alt="Weatherbox"  className="w-2/3 m-auto"/>
          <p className="temperature relative text-2xl font-semibold">Temp</p>
          <p className="description relative text-2xl font-semibold">Desc</p>
        
          <div className="weather-details flex justify-between my-2 w-full font-semibold">
          <div className="wind flex items-center w-1-2 h-18 px-2 justify-start">
            <FaWater style={{fontSize:"28px",marginRight:"15px"}}/>
            <div className="text">
              <span></span>
              <p>Humidity</p>
            </div>
          </div>

          <div className="humidity flex items-center w-1-2 h-18 px-2 justify-end">
            <FaWind style={{fontSize:"28px",marginRight:"15px"}}/>
            <div className="text">
              <span></span>
              <p>Wind Speed</p>
            </div>
          </div>


        </div>
        </div>

        
      </div>
    </>
  );
}

export default App;
