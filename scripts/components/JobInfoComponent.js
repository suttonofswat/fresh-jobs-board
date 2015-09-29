var React = require('react');



module.exports = React.createClass({
	render: function() {
		console.log('this.props.model', this.props.model);
		return (
			<div className="jobRow">
				<h3>{this.props.model.get('job_title')} At {this.props.model.get('employer')}</h3>
				<span>Location: {this.props.model.get('location')}</span>
				<p>Description: {this.props.model.get('job_description')}</p>
				<div>{this.props.model.get('job_tags')}</div>

			</div>
		);
	}
});