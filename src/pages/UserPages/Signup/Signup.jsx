import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { userReg } from "../../../Api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../Redux/UserSlice/UserSlice";
import { useDispatch } from "react-redux"
import 'react-toastify/dist/ReactToastify.css'

  
  export default function Signup() {
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate()
   
  
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(name.trim() === ''){
                toast('please enter your email')
            }else if(number.trim() === ''){
              toast('pleace enter your number')
            }else if(email.trim() === ''){
                toast('pleace enter your email')
            }else if(password.trim() === ''){
                toast('pleace enter your password')
            }else{
              const response = await userReg({name,number,email,password});

              if(response.status){
                console.log(response);
                localStorage.setItem('token',response.data.token);
                dispatch(setUserDetails({
                  id:response.data.userData._id,
                  name:response.data.userData.name,
                  mobile:response.data.userData.mobile,
                  email:response.data.userData.email,
                  image:response.data.userData.image,
                  is_admin:response.data.userData.is_admin,
                }))
                navigate('/')
              }
              toast(response.data.alert)
              }
        }catch(err){
          console.log(err);
        }
      }
  
    return (
        <>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <div className="mx-auto">
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" onChange={(e) => setName(e.target.value)} />
              <Input size="lg" label="Number" onChange={(e) => setNumber(e.target.value)} />
              <Input size="lg" label="Email" onChange={(e) => setEmail(e.target.value)} />
              <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth type="submit"> 
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </div>
      </Card>
          <ToastContainer />
          </>
    );
  }
  