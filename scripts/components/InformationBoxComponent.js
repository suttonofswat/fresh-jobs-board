var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form className="fullLookingJob">
            	<div className="lookingTitle">Looking for a Job?</div>
            	<hr />
            	<div className="lookingCreate">Create a Fresh Jobs profile and <strong>let employers come to you.</strong></div>
            	<ul>
            		<li>Employers search our database and contact you</li>
            		<li>Import easily from LinkedIn</li>
            		<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
            	</ul>
            	<button>Create a Profile</button>






            </form>
        );
    }
});

