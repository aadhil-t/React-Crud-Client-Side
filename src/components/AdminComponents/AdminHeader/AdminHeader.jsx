import {
    Button,
    Navbar,
    Typography,
  
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutDetails } from "../../../Redux/UserSlice/UserSlice";
  export default function NavbarDark() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //***********LOGOUT SECTION REDUX HANDLING SECTION**********//  
  const handleLogout = () =>{
    localStorage.removeItem('admintoken')
    dispatch(logoutDetails({
      id:'',
      name:'',
      email:'',
      mobile:'',
      is_admin:'',
      image:''
    }))
    navigate('/admin')
  }


    return (
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <div>
          <Button onClick={handleLogout}>Log out</Button>
          </div>
        </div>
      </Navbar>
    );
  }