import styled from "styled-components";
import { Link } from "react-router-dom";

const UserWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 40% 10%;
    align-items: center;
    box-shadow: 0 0 5px 5px #cce0ff;
    border-radius: 20px;
    width: 80%;
    padding: 10px 30px;
    background-color: #fff;
    margin: 10px 0;
    text-align: left;
`;

const NameWrapper = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const UsernameWrapper = styled.div``;

const EditUserButton = styled(Link)`
    border: 2px solid #6370e6;
    border-radius: 12px;
    background-color: #6370e6;
    align-self: center;
    cursor: pointer;
    padding: 5px;
    color: #fff;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #fff;
        color: #6370e6;
    }
`;

const User = ({ key, username, name, id }) => {
    console.log(id)
    return (
        <UserWrapper key={key}>
            <NameWrapper>{name}</NameWrapper>
            <UsernameWrapper>{username}</UsernameWrapper>
            <EditUserButton to={{pathname: `/edit-user/${id}`}} params={{ userId: {id} }}>Edit User</EditUserButton>
        </UserWrapper>
    )
}

export default User;
