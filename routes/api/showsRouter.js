const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Shows = require('../../models/Shows');

router.get('/', async (req, res) => {
	try {
		const shows = await Shows.find();
		res.json(shows);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error!!');
	}
});

router.post(
	'/',
	check('title', 'Please enter a show name')
		.not()
		.isEmpty(),
	check('opinion', 'Please leave a remark on the show')
		.not()
		.isEmpty(),
	check(
		'rating',
		'Please enter number between 1 and 10 as a rating for the show'
	).isNumeric(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, opinion, rating } = req.body;

		try {
			let newShow = await Shows.findOne({ title });
			if (newShow) {
				return res.status(400).json({ msg: 'Show already rated!!' });
			}

			newShow = new Shows({
				title,
				opinion,
				rating
			});

			await newShow.save();
			res.send(newShow);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error!!');
		}
	}
);

router.delete('/:id', async (req, res) => {
	try {
		const deleteShow = await Shows.findByIdAndDelete(req.params.id);
		res.json(deleteShow);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error!!');
	}
});

router.put('/:id', async (req, res) => {
	const show = await Shows.findById(req.params.id);
	const { opinion, rating } = req.body;
	const updateShow = {
		opinion: opinion ? opinion : show.opinion,
		rating: rating ? rating : show.rating
	};

	try {
		await Shows.findByIdAndUpdate(
			req.params.id,
			updateShow,
			{ new: true },
			(err, data) => {
				if (err) throw err;
				res.send(data);
			}
		);
	} catch (err) {
		console.error(err.message);
		res.send('Server Error!!');
	}
});

module.exports = router;
