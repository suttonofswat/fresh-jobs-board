var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form className="formy">
            	<div className="filter">
            		<div>Keywords</div>
					<input className="inputty" type="text" />
				</div>
				<div className="filter">
					<div>Location</div>
					<input className="inputty" type="text" />
				</div>
				<button>Search</button>
            </form>
        );
    }
});

