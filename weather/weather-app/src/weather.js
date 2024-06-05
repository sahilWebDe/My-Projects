import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './App.css';

const WeatherDisplay = ({ weather }) => {
  const temperatureCelsius = Math.round(weather.main.temp - 273.15);
  let iconUrl;

  if (weather.weather[0].icon === '01d') {
    iconUrl = 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=';
  } else if (weather.weather[0].icon === '01n') {
    iconUrl = 'https://t3.ftcdn.net/jpg/01/26/56/88/360_F_126568895_uC8Az3FyC5LTvmuyT2grst5TTKO0ietS.jpg';
  } else if (weather.weather[0].icon === '02d') {
    iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VucFVEZNp1JjtIJSettetNBe01-U2SWnRA&s';
  } else if (weather.weather[0].icon === '02n') {
    iconUrl = '/icons/partly_cloudy_night.png';
  } else if (weather.weather[0].icon === '03d' || weather.weather[0].icon === '03n') {
    iconUrl = 'https://s7d2.scene7.com/is/image/TWCNews/clouds_from_above';
  } else if (weather.weather[0].icon === '04d' || weather.weather[0].icon === '04n') {
    iconUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw';
  } else if (weather.weather[0].icon === '09d' || weather.weather[0].icon === '09n') {
    iconUrl = 'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=sph';
  } else if (weather.weather[0].icon === '10d') {
    iconUrl = 'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=sph';
  } else if (weather.weather[0].icon === '10n') {
    iconUrl = 'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=sph';
  } else if (weather.weather[0].icon === '11d' || weather.weather[0].icon === '11n') {
    iconUrl = 'https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg';
  } else if (weather.weather[0].icon === '13d' || weather.weather[0].icon === '13n') {
    iconUrl = 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?cs=srgb&dl=pexels-eberhardgross-1004665.jpg&fm=jpg';
  } else if (weather.weather[0].icon === '50d' || weather.weather[0].icon === '50n') {
    iconUrl = 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lum3n-44775-167699.jpg&fm=jpg';
  } else {
    iconUrl = '/icons/default.png';
  }

  return (
    <div className='weather'>
      <h3>Weather in {weather.name}</h3>
      <p>Temperature: {temperatureCelsius}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
    </div>
  );
};

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const refresh = (e) => {
    e.preventDefault();
    setCity('');
  };

  const handleWeatherFetch = async () => {
    if (city.trim() === '') {
      toast.error('Please enter a city name');
      return;
    }

    const apiKey = '0fbb06be0a86918f07c0be29b6582603';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      toast.success('Weather data fetched successfully');
    } catch (error) {
      toast.error('Failed to fetch weather data');
    }
  };

  return (
    <div className='App'>
      <form onSubmit={refresh}>
        <input
          type="text"
          className='input'
          placeholder="Enter the City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleWeatherFetch();
            }
          }}
        />
      </form>
      <button className='btn' onClick={handleWeatherFetch}>Get Weather</button>
      <ToastContainer />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}
