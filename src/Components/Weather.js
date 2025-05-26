import { useState } from "react"
import "./weatherStyle.css"
import axios from "axios"

const Weather = () => {
  //creating statehook
  const[city ,setcity] = useState();  
  const [wData ,setwData] = useState();

  //calling this function as we type in the inputfield
  const HandelData = (event) =>{
    setcity(event.target.value);
  }

  const getdata = () =>{
    fetchApi();
  }
  const fetchApi = async()=> {
    try{
      let Data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`b0dbbe8f9f7b73af5b846b4a51a34f53`}`);
      
      setwData(Data);
      console.log(Data);
    }
    catch(error){
      console.log("Error",error)
    }
  }

  return (
    <div className="container">
      <h1 className="Ldata">Weather App</h1>
      <div className="weather">
        <input id="locationInput" type="text" placeholder="Enter City" value={city}  onChange={HandelData}/><br/>
        <button id="searchButton" onClick={getdata}>Get Weather</button>
        {wData &&<>
          <h3 className="Ldata">{wData.data.name}</h3>
          <h4 className="Ldata">Temp :{Math.round(wData.data.main.temp)}</h4>
          <p className="Ldata">{wData.data.weather[0].description}</p>
        </>}
      </div>
    </div>
  )
}

export default Weather
