'use strict'
var React = require('react');
var Backbone = require('backbone');

var JobRowComponent = require('./JobRowComponent.js')
var JobFormComponent = require('./JobFormComponent.js')
var CompanyProfileModel = require('../models/CompanyProfileModel.js');
var JobModel = require('../models/JobPositionModel.js');
var CompanyInfoComponent = require('./CompanyInfoComponent.js');
var JobCollection = require('../collections/JobListingCollection');
var CompanyCollection = require('../collections/CompanyCollection');
var JobDetailsPageComponent = require('./JobDetailsPageComponent');

var jobs = new JobCollection();

var CompanyProfile1 = new CompanyProfileModel({
	company_name: 'Google',
	company_location: 'Ann Arbor',
	company_logo: 'http://www.digitalframesdirect.com/media/Corp/google-logo-small.gif',
	company_bgImg: 'http://i.ytimg.com/vi/2XX5zDThC3U/maxresdefault.jpg',
	company_size: 2


})


module.exports = React.createClass({
	getInitialState: function() {
		return {
			pageName: '',
			id: null
		};
	},
	componentWillMount:function(){
		var self=this;
		jobs.fetch();
		jobs.on('sync', function() {
			self.forceUpdate();
		});
		var Router = Backbone.Router.extend({
			routes : {
				'' : 'jobs',
				'jobs': 'jobs',
				'employers': 'employers',
				'details/:id': 	'details'
			},
			jobs : function(){
				self.setState({
					pageName: 'jobs'
				});
			},
			employers : function(){
				self.setState({
					pageName: 'employers'
				});
			},
			details: function(id){
				self.setState({
					pageName: 'details',
					id: id
				});
			}




		})

		this.router = new Router();
		Backbone.history.start();

	},
    
    render: function() {
		var pageComponent = null;

		if(this.state.pageName === 'jobs') {
			var newJobs = jobs.map(function(job){
				return(
						<JobRowComponent model={job} />
					
					);
			});
			pageComponent = 
			<div>
				<div className="jobbie">
					{newJobs}
				</div>
					<CompanyInfoComponent model={CompanyProfile1} />
			</div>
		}
		else if(this.state.pageName === 'details') {
		
				if(jobs.length > 0){
					var jobModel = 
						jobs.find(function(job) {
						return job.id === this.state.id;
					}, this);
			
					pageComponent = <JobDetailsPageComponent job={jobModel} />;
				}
		}
	
		else if(this.state.pageName === 'employers') {
			pageComponent = <JobFormComponent model={jobs} router={this.router}/>
		}
        return (
            <div>
            	{pageComponent}
            </div>

        );
    }
});

