import {
    Card,
    Input,
     Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { userLogin } from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { setUserDetails } from "../../../Redux/UserSlice/UserSlice";
import { useDispatch } from "react-redux";

  export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const GenerateError = (error)=>{
        toast.error(error,{
            position:'top-center',
            theme:'colored',
            autoClose: 3000
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            if(!email){
                GenerateError('Please enter your email')
            }else if(password.trim() === ''){
                GenerateError("Please enter your password")
            }
            else{
        
                const response = await userLogin({email,password});
                if(response.data.status){
                    localStorage.setItem('token',response.data.token);
                    dispatch(setUserDetails({
                        id:response.data.userData._id,
                        name:response.data.userData.name,
                        email:response.data.userData.email,
                        mobile:response.data.userData.mobile,
                        image:response.data.userData.image,
                        is_admin:response.data.userData.is_admin,
                    }))
                    navigate('/')
                }else{
                    toast(response.data.alert)
                }
            }
            setEmail('');
            setPassword('');      
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <div className="mx-auto">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" onChange={(e) =>setEmail(e.target.value)} />
            <Input type="password" size="lg" label="Password" onChange={(e) =>setPassword(e.target.value)} />
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