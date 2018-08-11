import * as React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';

import { App } from './view/app';

/* stylelint-disable */
injectGlobal`
	body {
		width: 100%;
		margin: 0;
		padding: 36px;
		font-family: sans-serif;
		background-color: #ebebeb;
	}

	main {
		height: 100%;
		width: 100%;
	}
`;

render(<App />, document.getElementById('root'));
