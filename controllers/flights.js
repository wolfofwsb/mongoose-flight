const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index,
    create,
    show
}



function show(req, res){
    Flight.findById(req.params.id, function(err, flightDoc) {
        if(err){
            console.log('======================err')
            console.log(err);
            console.log('==========================================')

            return res.send('err creating check the terminal')
        }
        console.log(flightDoc)
        res.render('flights/show', {flight: flightDoc})
    })
}
function newFlight (req, res) {
    res.render('flights/new')
    
}

function index(req, res){
    
   Flight.find({}, function (err, flightDocs){
        if(err){
            console.log('======================err')
            console.log(err);
            console.log('==========================================')

            return res.send('err creating check the terminal')
        }
        console.log('______________this is what you want to see____________')
        console.log(flightDocs)
        console.log('__________________________')
        res.render('flights/index', {flights: flightDocs})
})
}

function create(req, res){
    console.log(req.body, '<<<<intent to add')


    Flight.create(req.body, function(err, flightDoc){
        if(err){
            console.log('======================err')
            console.log(err);
            console.log('==========================================')

            return res.send('error creating, now check the terminal')
        }
        console.log('=============== ');
        console.log(flightDoc);
        console.log('==========================================');

        // respond to the client
        res.redirect('/')
    });
}   