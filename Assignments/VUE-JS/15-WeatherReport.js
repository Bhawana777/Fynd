import RainfallReport from "./15-RainfallReport.js";

const WeatherReport = {
    components: {
        RainfallReport: RainfallReport
    },
    props: {
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            default: 'India'
        },
        rainfall: Number,
        tomorrowRainfall: Number,
        dayAfterTomorrowRainfall: Number,
        date: String,
        temperature: {
            type: Object,
            // tObj is the value passed to the temperature prop
            // the validator function should return a boolean
            validator(tObj) {
                return typeof tObj.min === 'number' && typeof tObj.max === 'number';
            }
        }
    },
    template: `
        <div class="weather">
            <h2>{{city}}, {{country}}</h2>
            <hr />
            <p>
                Weather on {{date}}
                <br />
                Min Temperature is {{temperature.min}}
                <br />
                Max Temperature is {{temperature.max}}
                <br />
                <rainfall-report
                    :rainfall="rainfall"
                    :tomorrowRainfall="tomorrowRainfall"
                    :dayAfterTomorrowRainfall="dayAfterTomorrowRainfall"
                />
            </p>
        </div>
    `
};

export default WeatherReport;