import React from "react";
import styled from "styled-components";

const AddUserLabelWrapper = styled.label`
    margin-bottom: 30px;
`;

const AddUserLabel = styled.span`
    width: 200px;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const AddUserInputElement = styled.input`
    width: 100%;
    height: 40px;
    padding: 3px 10px;
    border: 2px solid #cce0ff;
    border-radius: 12px;
    box-sizing: border-box;

    &:focus-visible {
        border-color: #393f47;
    }
`;

const test = (e) => {
    e.preventDefault()
}

const AddUserInput = ({ label, type, name, value, onChange }) => (
    <AddUserLabelWrapper>
        <AddUserLabel>{label}</AddUserLabel>
        <AddUserInputElement type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} />
    </AddUserLabelWrapper>
);

export default AddUserInput;
