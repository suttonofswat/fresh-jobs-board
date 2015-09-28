'use strict';
var React = require('react');

var JobComponent = require('./components/JobComponent.js');
// var JobFormComponent = require('./components/JobFormComponent.js');

var mainContent = document.getElementById('main-content');

React.render(
	<JobComponent />,
	mainContent
);

