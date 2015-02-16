/**
* Tags.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'tags',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		id: {
			type: 'integer',
			primaryKey: true
		},
		title:  {
			type: 'string',
			columnName: 'name'
		},
		slug: {
			type: 'string',
			unique: true
		},
		description: {type: 'string'},
		image: {type: 'text'},
		hidden: {type: 'integer'},
		parent_id: {type: 'integer'},
		meta_title: {type: 'string'},
		meta_description: {type: 'string'},
		created_at: {type: 'datetime'},
		created_by: {type: 'integer'},
		updated_at: {type: 'datetime'},
		updated_by: {type: 'integer'},
	},
};