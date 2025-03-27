const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const  reviewsCreate = function(req, res) {
    res
        .status(200)
        .json({
            status: 'success',
            message: 'Reviews create new review'
        });
}

const reviewsReadOne = async function(req, res) {
    try {
        const locationid = req.params.locationid;
        const location = await Location.findById(locationid).select('name reviews');

        if (!location) {
            return res.status(404).json({
                message: 'Location not found'
            });
        }

        const review = location.reviews.id(req.params.reviewid);

        if (!review) {
            return res.status(404).json({
                message: 'Review not found'
            });
        }

        res.status(200).json(review);
    } catch (err) {
        res.status(500).json(err);
    }    
}

const reviewsUpdateOne = function(req, res) {
    res
        .status(200)
        .json({
            status: 'success',
            message: 'Reviews update one review'
        });
}

const reviewsDeleteOne = function(req, res) {
    res
        .status(200)
        .json({
            status: 'success',
            message: 'Reviews delete one review'
        });
}

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};