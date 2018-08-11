import styled from 'styled-components';

import * as fonts from 'utils/fonts';

export const Form = styled.form`
    width: 360px;
    padding: 24px;
`;

export const FieldSet = styled.fieldset`
    margin: 0 0 16px;
    padding: 0;
    border: none;
`;

export const Legend = styled.legend`
    padding: 0;
    margin-bottom: 8px;
    font-size: ${fonts.medium}px;
`;

export const FieldText = styled.input`
    height: 36px;
    width: 100%;
    border-radius: 4px;
    border: solid 1px #ccc;
    padding: 16px;
    box-sizing: border-box;
    outline: none;
    font-size: ${fonts.small}px;

    &:focus {
        border-color: dodgerblue;
        box-shadow: 0 0 8px 0 dodgerblue;
    }

    &::placeholder {
        font-size: ${fonts.small}px;
    }
`;

export const RadioLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    font-size: ${fonts.small}px;
    user-select: none;
    padding-left: 24px;
    position: relative;

    &:hover > span {
        background-color: #ccc;
    }
`;

export const RadioButton = styled.input`
    display: none;

    &:checked + span {
        background-color: dodgerblue;
    }

    &:checked + span::after {
        content: '';
        height: 8px;
        width: 8px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Circle = styled.span`
    display: inline-block;
    height: 16px;
    width: 16px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
`;

export const RadioGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
