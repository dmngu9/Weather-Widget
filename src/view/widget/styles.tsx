import styled from 'styled-components';

import * as fonts from 'utils/fonts';

export const Container = styled.div`
    width: 320px;
    padding: 24px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Title = styled.h3`
    margin: 0 0 24px;
    text-transform: uppercase;
    word-break: break-word;
    hyphens: auto;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
`;

export const IconContainer = styled.div`
    height: 120px;
    width: 120px;
    flex-shrink: 0;
    object-fit: fill;
    margin-right: 24px;
`;

export const Icon = styled.img`
    height: 100%;
    width: 100%;
`;

export const Info = styled.div`
    word-break: break-word;
    hyphens: auto;
`;

export const City = styled.p`
    font-size: ${fonts.medium}px;
    margin: 0 0 8px;
`;

export const Temperature = styled.p`
    font-size: ${fonts.xlarge}px;
    font-weight: bold;
    margin: 0 0 8px;
`;

export const Wind = styled.p`
    font-size: ${fonts.small}px;
    margin: 0;
`;
