'use strict';

var React = require('react');
var JobTipsComponent = require('./JobTipsComponent.js');
var JobFormComponent = require('./JobFormComponent.js');

module.exports = React.createClass({
	render: function(){
		return(
		<div>
			<nav>
				<div className="logo"><span className="brand">Fresh Jobs</span></div>
				<div className="Links">
				<a className="navLinks" href="#">Jobs</a>
				<a className="navLinks" href="#">Companies</a>
				<a className="navLinks" href="#">Cities</a>
				<a className="navLinks" href="#">Why Fresh?</a>
				<a className="navLinks" href="#">For Employers</a>
				</div>
			</nav>
			<JobTipsComponent />
			<JobFormComponent />
		</div>

			);


	}


});