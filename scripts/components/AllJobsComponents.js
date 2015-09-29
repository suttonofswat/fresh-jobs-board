'use strict'
var React = require('react');
var JobPositionModel = require('../models/JobPositionModel.js');
var JobInfoComponent = require('./JobInfoComponent.js')
var CompanyProfileModel = require('../models/CompanyProfileModel.js');
var CompanyInfoComponent = require('./CompanyInfoComponent.js');
// var TagsModel = require('../models/TagsModel.js');

var JobPosition1 = new JobPositionModel({
	employer: 'Google', 
	job_title: 'Developer', 
	location: 'Austin',
	job_description: 'know everything about everything.',
	job_tags: ['jedi ', 'developer ', 'googler ']
})

var CompanyProfile1 = new CompanyProfileModel({
	company_name: 'Google',
	company_location: 'Ann Arbor',
	company_logo: 'http://www.digitalframesdirect.com/media/Corp/google-logo-small.gif',
	company_bgImg: 'http://i.ytimg.com/vi/2XX5zDThC3U/maxresdefault.jpg',
	company_size: 2


})


module.exports = React.createClass({

    render: function() {
        return (
            <div>
            <JobInfoComponent model={JobPosition1} />
            <CompanyInfoComponent model={CompanyProfile1} />
            </div>
        );
    }
});

