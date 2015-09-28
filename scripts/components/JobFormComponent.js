var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
		<form className="posty">
			<h3>Post Your Job</h3>
			<div className="form">
				<label>Title</label>
					<input type="text" />
			</div>
			<div className="form">
				<label>Company Name</label>
					<input type="text" />
			</div>
			<div className="form">
				<label>Location</label>
				<input type="text" />
			</div>
			<div className="form">
				<label>Description</label>
				<textarea />
			</div>
			<div className="form">
				<label>Location</label>
				<input type="text" />
			</div>
			<div className="form">
				<label>Tags</label>
				<input type="text" />
			</div>
			<button>Submit</button>
		</form>
			);

	}



})