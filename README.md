### Mini Weather App
The application  can display a daily weather forecast in the selected city.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), 
using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
- Notes: In the mini weather app, the weather infomation is only updated when User selected correct location.

### BLOCK CORS:
Meta Weathers blocks CORS, so I use thingproxy prefix for CORS Proxies 
- Referecce: https://github.com/Freeboard/thingproxy.

### API
- Search location api:
  - Help to search location id by string query
  - return the data response, which includes Woeid.
- Get Weather By Location api:
  - Using the Woeid, which is found from search location api
  - Get weather with Woied  
### FEATURE  
- LOCATION FEATURE
  - Find locations by search keys
  - location slice
      -loading
      -list
- WEATHER FEATURE
  - Search Weather by location id
  - Component
    - WeatherIcons
        - support render Weather States icon
    - WeatherSearch
        - firstly, searching location/city by string query and showing loactionOptions/suggestions.
        - after user selected options, will dispatch to get Weather Deatails in the selected location.  
    - WeatherStatistics
        - suport render about general weather infomations.
    - WeatherWidget
        - support render daily (6 days) weather forecast
  - weather slice
    - loading
    - consolidatedWeather
    - generalWeatherInfo  
### USING REDUX SAGA    
- Handle loading / error in redux saga
    - RTK + Thunk: provide a way to await an async action right on component --> Handle loading/error on component easily
    - RTK + Saga: doesn't have a way to do so --> what to do?
- imho, my suggestions:
    - LOADING: can based on redux store
    - ERROR: eliminate the usage as much as you can.
- Considerations:
    - Trigger error toast from saga.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.   