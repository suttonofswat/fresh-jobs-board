var React = require('react');
var JobTipsComponent = require('./JobTipsComponent.js');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<form className="posty" id="form" onSubmit={this.onFormSubmitted}>
					<h3>Post Your Job</h3>
					<div className="form">
						<label>Title</label>
							<input type="text"  ref="title"/>
					</div>
					<div className="form">
						<label>Company Name</label>
							<input type="text" ref="companyName"/>
					</div>
					<div className="form">
						<label>Location</label>
						<input type="text" ref="location"/>
					</div>
					<div className="form">
						<label>Description</label>
						<textarea ref="description"/>
					</div>
					<div className="form">
						<label>Tags</label>
						<input type="text" ref="tags" />
					</div>
					<button>Submit</button>
				</form>
				<JobTipsComponent />
		</div>
			);

	},
	onFormSubmitted: function(e){
		e.preventDefault();
		this.props.model.create({
			job_title: this.refs.title.getDOMNode().value,
			employer: this.refs.companyName.getDOMNode().value,
			job_location: this.refs.location.getDOMNode().value,
			job_description: this.refs.description.getDOMNode().value

		});

		console.log('it went through');
		this.props.router.navigate('jobs', {trigger: true});
		
	}



});