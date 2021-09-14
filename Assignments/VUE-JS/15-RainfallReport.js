const RainfallReport = {
    props: {
        rainfall: Number,
        tomorrowRainfall: Number,
        dayAfterTomorrowRainfall: Number
    },
    computed: {
        // you can use props like data (this.props just like we use this.data)
        averageNextTwoDaysRainfall() {
            // "30" + "40" = "3040" (string concatenation)
            // 30 + 40 = 70 (addition)

            return (this.tomorrowRainfall + this.dayAfterTomorrowRainfall) / 2;
        }
    },
    template: `
        <div>
            Rainfall: {{rainfall}} mm
            <br />
            Average rainfall predicted over next 2 days = {{averageNextTwoDaysRainfall}} mm
        </div>
    `
};

export default RainfallReport;