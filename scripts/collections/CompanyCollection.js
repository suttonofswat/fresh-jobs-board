'use strict';

var Backbone = require('backbone');
var CompanyModel = require('../models/CompanyProfileModel.js');

module.exports = Backbone.Collection.extend({
	model: CompanyModel

})