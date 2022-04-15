
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const classSchema = Schema( {
    name:String,
    code:Number,
    semester:String,
    email_restriction:String
} );

module.exports = mongoose.model( 'Class', classSchema );
