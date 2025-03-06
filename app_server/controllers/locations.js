const homelist = function(_req, res) {
    res.render("locations-list", { title: "Home" });
};

const locationInfo = function(_req, res) {
    res.render("location-info", { title: "Location Info" });
};

const addReview = function(_req, res) {
    res.render("index", { title: "Add review" });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};