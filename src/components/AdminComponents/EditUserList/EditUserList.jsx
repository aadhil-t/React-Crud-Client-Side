import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";
import { EditUserData, UpdateUser } from "../../../Api/AdminApi";
import { ToastContainer,toast } from "react-toastify";

  export default function SimpleRegistrationForm() {

    const { id } = useParams();
    const [value,setValue] = useState({
        name:'',
        mobile:'',
        email:'',
    })
    const navigate = useNavigate()

    
// *********** USER DATA EDITING SECTION **********//
useEffect(() =>{
    const UserData = async () =>{
     try{
         const response = await EditUserData(id)
         setValue({name:response.data.userData.name,mobile:response.data.userData.mobile,email:response.data.userData.email})
     }catch(err){
         console.log(err);
     }
    }
    UserData();
 },[id])


//********** USER DATA UPDATING SECTION */ 
 const handleSubmit = async (e) =>{
     e.preventDefault();
     try{
         const response = await UpdateUser(id,value)
         if(response.data.status){
             toast.success(response.data.alert)
             navigate('/admin/dashboard')
         }else{
             toast.error(response.data.alert)
         }
     }catch(err){
         console.log(err);
     }
 }

    return (
      <Card color="transparent" shadow={false} >
        <Typography variant="h4" color="blue-gray">
          Edit User List
        </Typography>
        <div className="mx-auto">
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
          <Input
                name="name"
                value={value.name}
                onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                size="lg"
                label="Name"
              />
          <Input
                name="mobile"
                value={value.mobile}
                onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                size="lg"
                label="Mobile"
              />
          <Input
                name="email"
                value={value.email}
                onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
                size="lg"
                label="Email"
              />
         
            
          </div>
         
          <Button type="submit" className="mt-6" fullWidth>
            Submit
          </Button>
          <ToastContainer />
        </form>
        </div>
      </Card>
    );
  }