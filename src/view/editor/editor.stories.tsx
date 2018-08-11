import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Editor from './editor-dumb';

storiesOf('Editor', module).add('basic', () => <Editor unit="metric" wind="on" onChange={action('onchange')} />);
