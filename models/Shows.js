const mongoose = require('mongoose');

const ShowsSchema = new mongoose.Schema({
	show: {
		type: String
	},
	opinion: {
		type: String
	},
	rating: {
		type: Number
	},
	rewatch: {
		type: Boolean,
		default: false
	}
});

module.exports = Shows = mongoose.model('shows', ShowsSchema);
