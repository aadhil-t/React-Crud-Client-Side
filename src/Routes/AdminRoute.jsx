import AdminLogin from "../pages/AdminPages/AdminLogin/AdminLogin";
import Dashboard from '../pages/AdminPages/Dashboard/Dashboard'
import EditUser from '../pages/AdminPages/EditUser/EditUser'
import { Routes,Route } from "react-router-dom";
import AdminPublic from "./AdminPublic";
import AdminProtect from "./AdminProtect"

function AdminRoute(){
    return(
      
        <Routes>
            <Route path="/" element={<AdminPublic><AdminLogin/></AdminPublic>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edituser/:id" element={<EditUser/>}/>
        </Routes>
    )
    }

    export default AdminRoute;