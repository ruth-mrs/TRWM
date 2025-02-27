const homelist = function(_req, res) {
    res.render("index", { title: "Home" });
};

const locationInfo = function(_req, res) {
    res.render("index", { title: "Location Info" });
};

const addReview = function(_req, res) {
    res.render("index", { title: "Add review" });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};