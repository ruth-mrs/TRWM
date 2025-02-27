const about = function(_req, res) {
    res.render("index", { title: "About" });
};

module.exports = {
    about
};