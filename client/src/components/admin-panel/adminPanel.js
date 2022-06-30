import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import styled from "styled-components";

import User from "./user";

const AdminPanelWrapper = styled.div`
    align-self: baseline;
    width: 100%;
    text-align: center;
`;

const UserList = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const AddUserButton = styled(Link)`
    align-self: flex-end;
    margin: 20px 10%;
    border: 2px solid #99c0ff;
    border-radius: 12px;
    background-color: #99c0ff;
    font-size: 25px;
    cursor: pointer;
    padding: 5px 30px;;
    color: #fff;
    box-sizing: border-box;
    text-decoration: none;

    &:hover {
        background-color: #fff;
        color: #393f47;
    }
`

const AdminPanel = () => {
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3030/api/users')
            .then((response) => {
                const data = response.data;
                setUserData(data);
            })
            .then(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <AdminPanelWrapper>
            {isLoading ? (
                <h1>Loading ...</h1>
            ) : (
                <UserList>
                    <h1>Admin Panel</h1>
                    <AddUserButton to={{pathname: "/add-user"}}>Add New User</AddUserButton>
                    {userData.map((user) => {
                        return <User key={user._id} name={user.name} username={user.username} id={user._id} />
                    })}
                </UserList>
            )}
        </AdminPanelWrapper>
    )
}

export default AdminPanel;
