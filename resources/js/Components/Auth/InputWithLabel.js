import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;
const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;
const Input = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid ${oc.gray[3]};
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placehodler {
        color: ${oc.gray[3]};
    }
`;
const Option = styled.option`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;
const Select = styled.select`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;
export const InputWithLabel = ({ label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </Wrapper>
);


export const SelectWithLabel = ({ label, input, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Select {...rest}>
            {input.map( c =>{
                return <Option>{c}</Option>
            })}
        </Select>
    </Wrapper>
);

export const CheckWithLabel = ({ label, input, ...rest }) => (
    <Wrapper>
        <Label>{label}</Label>
        {input.map( m => {
            // console.log(m);
            return <Input {...rest} value={m} />
        })}
    </Wrapper>
);