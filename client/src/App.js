import { Routes, Route } from "react-router-dom";

import AdminPanel from "./components/admin-panel/adminPanel";
import AddUser from "./components/add-user/addUser"
import EditUser from "./components/edit-user/editUser";

import './app.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminPanel/>} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:userId" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
