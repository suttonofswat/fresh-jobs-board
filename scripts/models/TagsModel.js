'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: 0,
		tag_name: ''

	},
	idAttribute: 'id'
});