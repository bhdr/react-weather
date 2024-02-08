import React from 'react';
import './/style.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">

      <div className="top">
        <p className="header"><Icon className='location' name='map marker alternate' size='small' /> <span>{weatherData.name}</span></p>
        <Button className="refresh-button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="bottom">
        <div className="flex">
          <p className="day"><Icon className='hour' name='clock outline'></Icon><span>{moment().format('lll')}</span></p>
          <p className="description">{weatherData.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp"><Icon className='temperature' name='thermometer quarter'></Icon> {weatherData.main.temp} &deg;C</p>
          <p className="temp"><Icon className='humidity' name='ioxhost'></Icon> {weatherData.main.humidity} %</p>
        </div>
      </div>
    
  </div>
)

export default WeatherCard;