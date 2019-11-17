/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ( { actions } ) => {

	const { createPage } = actions;

	const employees = [
		{
			name: 'Imran',
			job: 'WordPress Engineer'
		},
		{
			name: 'John',
			job: 'React Developer'
		},
	];

	/**
	 * Loop through the data and provide the path, template, and context
	 * (data that will be passed in the props’ pageContext) to createPage for each invocation
	 */
	employees.forEach( employee => {
		createPage({
			path: `/${ employee.name }`,
			component: require.resolve( `./src/templates/employee-template.js` ),
			context: { employee }
		})
	} );
};
