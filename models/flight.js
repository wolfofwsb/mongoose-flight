const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    }
})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {

            const now = new Date();
            const oneYr = new Date();
            oneYr.setYear(now.getYear() + 1);
            $("#yearFromNow").append(oneYr.toString());
        },
        min: 2022
    },
    destinations: [destinationSchema]


});







module.exports = mongoose.model('Flight', flightSchema) 