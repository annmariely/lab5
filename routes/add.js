var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var toAdd = {

		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	res.render('add', toAdd);
	data["friends"].push(toAdd);
 }