'use strict';


var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		employer: '',
		job_title: '',
		job_location: '',
		date_created: null,
		job_description: '',
		job_tags: []

	},
	idAttribute: '_id',
	urlRoot: 'https://jmingus-server.herokuapp.com/collections/jerb1'
});