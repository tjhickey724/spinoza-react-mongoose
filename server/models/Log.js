'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var logSchema = Schema( {
  userId: ObjectId,
  code: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Log', logSchema );
