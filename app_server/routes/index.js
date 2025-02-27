var express = require('express');
var router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlLocations.homelist);

/* locations pages */
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlAbout.about);


module.exports = router;
