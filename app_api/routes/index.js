var express = require('express');
var router = express.Router();
var ctrlLoactions = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');


/* locations. */
router.get('/locations', ctrlLoactions.locationsListByDistance);
router.post('/locations', ctrlLoactions.locationsCreate);
router.get('/locations/:locationid', ctrlLoactions.locationsReadOne);
router.put('/locations/:locationid', ctrlLoactions.locationsCreate);
router.delete('/locations/:locationid', ctrlLoactions.locationsDeleteOne);
/* Other pages*/
router.post('/locations/:locationid/reviews', ctrlReviews.reviewCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
