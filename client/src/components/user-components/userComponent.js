import styled from "styled-components";

const UserWrapper = styled.div`
  box-shadow: 0 0 5px 5px #cce0ff;
  border-radius: 20px;
  width: 50%;
  height: 70%;
  padding: 50px;
  background-color: #fff;
`;

const UserHeader = styled.h1`
  text-align: center;
  margin-bottom: 80px;
`;

const UserForm = styled.form`
    display: flex;
    flex-flow: column;
`;

const UserSubmit = styled.input`
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

const UserLabelWrapper = styled.label`
    margin-bottom: 30px;
`;

const UserLabel = styled.span`
    width: 200px;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const UserInputElement = styled.input`
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

export { UserWrapper, UserHeader, UserForm, UserSubmit, UserLabelWrapper, UserLabel, UserInputElement};
