import * as React from 'react';
import { storiesOf } from '@storybook/react';

import App from './app-dumb';

storiesOf('App', module).add('basic', () => <App />);
