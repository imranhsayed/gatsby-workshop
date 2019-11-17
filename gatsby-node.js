/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ( { actions } ) => {

	const { createPage } = actions;

	const person = [
		{
			name: 'Imran Sayed',
			job: 'WordPress Engineer'
		},
		{
			name: 'Lara Croft',
			job: 'Actress'
		},
	]
};
