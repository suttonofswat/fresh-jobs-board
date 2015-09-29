'use strict';

var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<nav>
				<div className="logo"><span className="brand">Fresh Jobs</span></div>
				<div className="Links">
				<a className="navLinks" href="#jobs">Jobs</a>
				<a className="navLinks" href="#">Companies</a>
				<a className="navLinks" href="#">Cities</a>
				<a className="navLinks" href="#">Why Fresh?</a>
				<a className="navLinks" href="#employers">For Employers</a>
				</div>
			</nav>


			);


	}


});