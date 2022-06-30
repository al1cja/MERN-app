import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { UserWrapper, UserHeader, UserForm, UserSubmit } from "../user-components/userComponent";
import UserInput from "../user-components/userInput";

const UserDelete = styled.input`
    margin-top: 20px;
    border: 2px solid #ed645f;
    border-radius: 12px;
    background-color: #ed645f;
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

const EditUser = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { userId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3030/api/users/${userId}`)
            .then((response) => {
                const data = response.data;
                setUsername(data.username);
                setName(data.name);
                setPassword(data.password);
            })
            .catch(error => {
                console.log(error);
                navigate('/')
            })
    }, [userId, navigate])

    const editUserHandler = () => {
        if (username.length > 0 && name.length > 0 && password.length > 0) {
            const user = {
                "username": username,
                "password": password,
                "name": name
            }

            axios.put(`http://localhost:3030/api/users/${userId}`, user)
                .then(() => navigate('/'))
        }
    }

    const deleteUserHandler = () => {
        axios.delete(`http://localhost:3030/api/users/${userId}`)
            .then(() => navigate('/'))
    }

    return(
        <UserWrapper>
            <UserHeader>Add user</UserHeader>
            <UserForm>
                <UserInput 
                    label="Username" 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={setUsername}
                />
                <UserInput 
                    label="Name" 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={setName}
                />
                <UserInput 
                    label="Password" 
                    type="password"  
                    name="password" 
                    value={password}
                    onChange={setPassword}
                />
                <UserSubmit type="button" value="Edit User" onClick={editUserHandler} />
                <UserDelete type="button" value="Delete User" onClick={deleteUserHandler} />
            </UserForm>
        </UserWrapper>
)};

export default EditUser;
