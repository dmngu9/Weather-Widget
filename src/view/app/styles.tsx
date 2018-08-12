import styled from 'styled-components';

import { Editor } from 'view/editor';
import { Widget } from 'view/widget';
import { media } from 'utils/breakpoints';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const StyledEditor = styled(Editor)`
    ${media.tablet`
		border: none;
		margin-bottom: 32px;
	`};

    border-right: 1px solid #ccc;
    margin-right: 24px;
    flex-shrink: 0;
`;

export const StyledWidget = styled(Widget)`
    flex-shrink: 0;
`;
