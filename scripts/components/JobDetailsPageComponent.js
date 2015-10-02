var React = require('react');



module.exports = React.createClass({
	render: function() {
		console.log(this.props.job);
		return (
				<div>
					<div className="jobTitle">{this.props.job.get('job_title')}</div>
					<div className="para">{this.props.job.get('employer')} {this.props.job.get('job_location')}</div>
					<div>{this.props.job.get('job_tags')}</div>
					<div className="jobDesc">Job Description</div>
					<hr />
					<p>{this.props.job.get('job_description')}</p>
					

				</div>
		);
	}
});


