import {
    Card,
    Input,
     Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { Adminsignin } from "../../../Api/AdminApi";
import { setUserDetails } from "../../../Redux/UserSlice/UserSlice";
import 'react-toastify/dist/ReactToastify.css'    
  export default function AdminLogin() {
   const [value,setValue] = useState({
    email:'',password:'',
   })

    const navigate=useNavigate()
    const dispatch = useDispatch()
  
    const handleAdminLogin = async(e)=>{
        e.preventDefault();
        try {
            const {email,password} = value

            if(email.trim() === ''){
                toast.info('Please enter your email')
            }else if(password.trim() === ''){
                toast.info("Please enter your password")
            }
            else{
                const response = await Adminsignin(value);
                if(response.data.status){
                    localStorage.setItem('admintoken',response.data.token);
                    dispatch(setUserDetails({
                        id:response.data.adminData._id,
                        name:response.data.adminData.name,
                        email:response.data.adminData.email,
                        mobile:response.data.adminData.mobile,
                        image:response.data.adminData.image,
                        is_admin:response.data.adminData.is_admin,
                    }))
                    navigate('/admin/dashboard')
                }else{
                    toast.error("email doesnt exist")
                }
            }     
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Admin Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <div className="mx-auto">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleAdminLogin}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" name="email" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} />
            <Input type="password" name="password" size="lg" label="Password" onChange={(e) => setValue({...value,[e.target.name]: e.target.value})} />
          </div>
          <Button type="submit" className="mt-6" fullWidth>   
            Log In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
        <ToastContainer />
        </div>
      </Card>

    );
  }