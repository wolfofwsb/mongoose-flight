const Flight = require('../Models/Flight')

module.exports = {
	create
}


function create(req, res) {
	
	console.log('========================');
	console.log(req.body);
	console.log('=========================')
	

	
	Flight.findById(req.params.id, function (err, flightLog) {

		if (err) {
			console.log(err)
			return res.send('error from create reviews check the terminal')
		}
        
		
        
        flightLog.destinations.push(req.body);
        flightLog.save(function (err) {
            console.log(flightLog)
            
			res.redirect(`/flights/${req.params.id}`)

        });

	

	})
};