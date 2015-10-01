var React = require('react');
// var JobCollection = require('../collections/JobListingCollection');


module.exports = React.createClass({
	render: function() {
		console.log('this.props.model', this.props.model);
		return (
				<div className="jobRow">
					<a href={'#details/'+this.props.model.get('_id')}>{this.props.model.get('job_title')} at {this.props.model.get('employer')}</a>
					<span>Location: {this.props.model.get('job_location')}</span>
					<p>Description: {this.props.model.get('job_description')}</p>
					<div>{this.props.model.get('job_tags')}</div>

				</div>
		);
	}
});