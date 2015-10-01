'use strict';

var Backbone = require('backbone');
var JobPositionModel = require('../models/JobPositionModel.js');


module.exports = Backbone.Collection.extend({
	model: JobPositionModel,
	url: 'https://jmingus-server.herokuapp.com/collections/jerb1'
})