import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserWrapper, UserHeader, UserForm, UserSubmit } from "../user-components/userComponent";
import AddUserInput from "./addUserInput";

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const addUserHandler = () => {
        if (username.length > 0 && name.length > 0 && password.length > 0) {
            const user = {
                "username": username,
                "password": password,
                "name": name
            }

            axios.post('http://localhost:3030/api/users', user)
                .then(() => navigate('/'))
        }
    }

    return(
        <UserWrapper>
            <UserHeader>Add user</UserHeader>
            <UserForm>
                <AddUserInput 
                    label="Username" 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={setUsername}
                />
                <AddUserInput 
                    label="Name" 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={setName}
                />
                <AddUserInput 
                    label="Password" 
                    type="password"  
                    name="password" 
                    value={password}
                    onChange={setPassword}
                />
                <UserSubmit type="button" value="Add User" onClick={addUserHandler} />
            </UserForm>
        </UserWrapper>
)};

export default AddUser;
