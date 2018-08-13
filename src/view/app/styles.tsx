import styled from 'styled-components';

import { Editor } from 'view/editor';
import { media } from 'utils/breakpoints';

export const Container = styled.section`
    ${media.tablet`
        flex-direction: column;
	`};

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;

export const StyledEditor = styled(Editor)`
    ${media.tablet`
		border: none;
		margin-bottom: 32px;
        margin-right: 0;
	`};

    border-right: 1px solid #ccc;
    margin-right: 24px;
    flex-shrink: 0;
`;
