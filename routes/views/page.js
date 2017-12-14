var keystone = require('keystone');

exports = module.exports = function(req, res){
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
	locals.data = req.params.pages;
	console.log(req.params.pages);
	// Render the view
	view.render('pages/'+locals.data);
}