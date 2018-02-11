var express = require('express');
var router = express.Router();
var ctrlLoactions = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Loactions pages. */
router.get('/', ctrlLoactions.homelist);
router.get('/location/:locationid', ctrlLoactions.locationInfo);
router.get('/location/:locationid/review/new', ctrlLoactions.addReview);
router.post('/location/:locationid/review/new', ctrlLoactions.doAddReview);

/* Other pages*/
router.get('/about', ctrlOthers.about);

module.exports = router;
