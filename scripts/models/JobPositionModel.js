'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: 0,
		employer: '',
		job_title: '',
		job_location: '',
		date_created: null,
		job_description: '',
		job_tags: []

	},
	idAttribute: 'id'
});