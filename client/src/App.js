import { Routes, Route } from "react-router-dom";

import AdminPanel from "./components/admin-panel/adminPanel";
import AddUser from "./components/add-user/addUser"
import EditUser from "./components/edit-user/editUser";

import Login from "./components/login/login";

import './app.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminPanel/>} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:userId" element={<EditUser />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
