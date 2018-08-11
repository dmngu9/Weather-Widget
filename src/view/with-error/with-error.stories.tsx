import * as React from 'react';
import { storiesOf } from '@storybook/react';

import withError from './with-error';

const Example: React.StatelessComponent<{ title: string }> = ({ title }) => <div>{title}</div>;

const WithError = withError(Example);

storiesOf('WithError', module)
    .add('error', () => <WithError error="this is error" title="title" />)
    .add('no error', () => <WithError title="title" />);
