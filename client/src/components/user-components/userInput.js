import React from "react";

import { UserLabelWrapper, UserLabel, UserInputElement } from "./userComponent";

const UserInput = ({ label, type, name, value, onChange }) => (
    <UserLabelWrapper>
        <UserLabel>{label}</UserLabel>
        <UserInputElement type={type} name={name} value={value} onChange={(e) => onChange(e.target.value)} />
    </UserLabelWrapper>
);

export default UserInput;
