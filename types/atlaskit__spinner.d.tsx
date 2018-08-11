declare module '@atlaskit/spinner' {
    import * as React from 'react';

    interface Props {
        size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
        isCompleting?: boolean;
        delay?: number;
        invertColor?: boolean;
        onComplete?: () => void;
    }

    export default class extends React.Component<Props> {}
}
