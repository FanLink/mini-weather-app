### Mini Weather App'
The application  can display a daily weather forecast of the selected city.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), 
using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
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
    - WeatherSearch
    - WeatherStatistics
    - WeatherWidget
  - weather slice
    - loading
    - consolidatedWeather
    - generalWeatherInfo  
### USING REDUX SAGA    
- Handle loading / error in redux saga
  -RTK + Thunk: provide a way to await an async action right on component --> Handle loading/error on component easily
  -RTK + Saga: doesn't have a way to do so --> what to do?
- imho, my suggestions:
    -LOADING: can based on redux store
    -ERROR: eliminate the usage as much as you can.
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