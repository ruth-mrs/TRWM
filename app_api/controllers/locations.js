const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const locationsCreate = async (req, res) => {
    
};

const locationsReadAll = async (req, res) => {
    try {
        const locations = await Location.find();

        if (!locations) {
            return res.status(404).json({
                message: 'Locations not found'
            });
        }

        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json(err);
    }
}

const locationsReadOne = async (req, res) => {
    try {
        const locationid = req.params.locationid;
        const location = await Location.findById(locationid);

        if (!location) {
            return res.status(404).json({
                message: 'Location not found'
            });
        }

        res.status(200).json(location);
    } catch (err) {
        res.status(500).json(err);
    }    
}

const locationsUpdateOne = (req, res) => {
    res
        .status(200)
        .json({
            status: 'success',
            message: 'Locations update one location'
        });
}

const locationsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({
            status: 'success',
            message: 'Locations delete one location'
        });
}

module.exports = {
    locationsCreate,
    locationsReadAll,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};