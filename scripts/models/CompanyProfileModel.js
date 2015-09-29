'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: 0,
		company_name: '',
		company_location: '',
		company_logo: '',
		company_bgImg: '',
		company_size: 0

	},
	idAttribute: 'id'
});