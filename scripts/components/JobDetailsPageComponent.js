var React = require('react');



module.exports = React.createClass({
	render: function() {
		console.log(this.props.job);
		return (
				<div>
					<h3>{this.props.job.get('job_title')} at {this.props.job.get('employer')}</h3>
					<span>Location: {this.props.job.get('job_location')}</span>
					<p>Description: {this.props.job.get('job_description')}</p>
					<div>{this.props.job.get('job_tags')}</div>

				</div>
		);
	}
});


