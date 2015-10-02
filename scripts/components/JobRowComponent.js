var React = require('react');
// var JobCollection = require('../collections/JobListingCollection');


module.exports = React.createClass({
	render: function() {
		console.log('this.props.model', this.props.model);
		return (
				<div className="jobRow">
				<hr />
					<a className="jobTitle" href={'#details/'+this.props.model.get('_id')}>{this.props.model.get('job_title')}</a>
					<div><strong>{this.props.model.get('employer')}</strong> - {this.props.model.get('job_location')}</div>
					<div className="para">{this.props.model.get('job_description')}</div>
					<div>{this.props.model.get('job_tags')}</div>

				</div>
		);
	}
});