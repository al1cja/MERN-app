import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import AddUserInput from "./addUserInput";

const AddUserWrapper = styled.div`
  box-shadow: 0 0 5px 5px #cce0ff;
  border-radius: 20px;
  width: 50%;
  height: 70%;
  padding: 50px;
  background-color: #fff;
`;

const AddUserHeader = styled.h1`
  text-align: center;
  margin-bottom: 80px;
`;

const AddUserForm = styled.form`
    display: flex;
    flex-flow: column;
`;

const AddUserSubmit = styled.input`
    margin-top: 50px;
    border: 2px solid #99c0ff;
    border-radius: 12px;
    background-color: #99c0ff;
    width: 300px;
    align-self: center;
    font-size: 25px;
    cursor: pointer;
    padding: 5px;
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #393f47;
    }
`;

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
        <AddUserWrapper>
            <AddUserHeader>Add user</AddUserHeader>
            <AddUserForm>
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
                <AddUserSubmit type="button" value="Add User" onClick={addUserHandler} />
            </AddUserForm>
        </AddUserWrapper>
)};

export default AddUser;
