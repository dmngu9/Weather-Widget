import * as React from 'react';

import { Error } from './styles';

interface Props {
    error?: string;
}

// tslint:disable:no-any
const withError = <P extends {}>(Component: React.ComponentType<P>): React.StatelessComponent<P & Props> => ({
    error,
    ...props
}: any) => (!!error ? <Error>{error}</Error> : <Component {...props} />);

export default withError;
