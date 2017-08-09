import React from 'react';

export default () => {
	const coverStyle = {
		textAlign: 'center'
	}

	return (
		<div style={coverStyle}>
			<h1>Welcome to React with Redux Club!</h1>
			<p>This sample project mainly teaches you two Redux concepts:</p>
			<ul>
				<li>Higher-Order Components</li>
				<li>Middlewares</li>
			</ul>
		</div>
	);
}