import React from 'react';

export default ( { pageContext: { employee } } ) => (
	<section>
		{ employee.name } - { employee.job }
	</section>
);
