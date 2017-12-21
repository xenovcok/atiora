var keystone = require('keystone');

exports = module.exports = function(req, res){
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'about';
	locals.data = req.params.pages;
	

	view.render('pages/'+locals.data, {}, function(err, html) {
		if(err) {
			res.redirect('/page/500');
		}else{
			res.send(html)
		}
	});
	console.log('render '+locals.data+' Page');

}