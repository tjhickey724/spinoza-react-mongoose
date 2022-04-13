'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var classSchema = Schema( {
  name: String,
  code:String,
  semester: String,
} );

module.exports = mongoose.model( 'Class', classSchema );