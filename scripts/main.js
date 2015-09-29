'use strict';
var React = require('react');
var Backbone = require('backbone');

var JobComponent = require('./components/JobComponent.js');
var NavComponent = require('./components/NavComponent.js');
var AllJobsComponent = require('./components/AllJobsComponents.js');

var mainNav = document.getElementById('mainNav');
var mainContent = document.getElementById('main-content');

var Router =Backbone.Router.extend({
	routes : {
	'jobs': 'jobsPage',
	'employers': 'employersPage'
	},
	employersPage: function(){
		React.render(
		<JobComponent />,
		mainContent
		)
	},
	jobsPage: function(){
		React.render(
		<AllJobsComponent />,
		mainContent
		)
	}
});



React.render(
	<NavComponent />,
	mainNav

);

var app = new Router();
Backbone.history.start();





