const index = function (_req, res, _next) {
  res.render('index', { title: 'Express' });
};

module.exports = {
  index
};