const weather = require('weather-js');
const EventEmitter = require('events');

class WeatherEmitter extends EventEmitter {}
const emitter = new WeatherEmitter();

class DrzzlWeather extends EventEmitter {

	// constructor creates our object and takes an address/lat/lng
	// as it's main argument
	constructor(someAddress) {
		super();

		// property to let us know if our weather fetch failed or had error
		this.error = false;

		// some property that stores the JSON information
		this.weatherData = {};
		// TODO - lets make sure we can do this async
		// either with promises or callbacks

		// if an address is provided, query weather-js
		// for current weather data
		weather.find({
			search: someAddress,
			degreeType: 'F'
		}, function(err, result) {
			if ( err ) {
				this.error = err;
				console.log(err);
			}

			this.weatherData = result[0];
			this.emit('loaded');
		}.bind(this));
	}

	// method to get the current temp
	temp() {
		return this.weatherData.current.temperature;
	}

	// method to get the current city name
	city() {
		return this.weatherData.location.name;
	}

	// method to get skytext
	skytext() {
		return this.weatherData.current.skytext;
	}

	// method to get precipitation chance (currentDate YYYY-mm-dd)
	// this.weatherData.forecast[].precip
	precip(date) {
		let arrLen = this.weatherData.forecast.length;
		for ( let i = 0; i < arrLen; i++ ) {
			if ( date == this.weatherData.forecast[i].date ) {
				return this.weatherData.forecast[i].precip;
			}
		}
	}


}

module.exports = DrzzlWeather;
