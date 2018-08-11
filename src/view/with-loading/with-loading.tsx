import * as React from 'react';

import Spinner from '@atlaskit/spinner';

interface Props {
    loading?: boolean;
}

// tslint:disable:no-any
const withLoading = <P extends {}>(Component: React.ComponentType<P>): React.StatelessComponent<P & Props> => ({
    loading,
    ...props
}: any) => (loading ? <Spinner size="large" /> : <Component {...props} />);

export default withLoading;
