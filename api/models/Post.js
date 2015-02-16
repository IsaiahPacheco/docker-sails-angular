/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'posts',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		id: {
			type: 'integer',
			primaryKey: true
		},
		title:  {type: 'string'},
		slug: {
			type: 'string',
			unique: true,
			index: true
		},
		html: {type: 'string'},
		image: {type: 'text'},
		featured: {type: 'integer'},
		page: {type: 'integer'},
		status: {type: 'string'},
		meta_title: {type: 'string'},
		meta_description: {type: 'string'},
		created_at: {type: 'datetime'},
		created_by: {type: 'integer'},
		updated_at: {type: 'datetime'},
		updated_by: {type: 'integer'},
		published_at: {type: 'datetime'},
		published_by: {type: 'integer'},
	}
};

