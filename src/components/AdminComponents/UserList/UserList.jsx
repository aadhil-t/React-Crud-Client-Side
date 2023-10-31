import { Button, Card,Input, Typography } from "@material-tailwind/react";
import { UserListDetails,DeleteUser } from "../../../Api/AdminApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const TABLE_HEAD = ["No", "Name", "Number", "Email","Actions"];
 

 
export default function TableWithStripedRows() {

    const navigate = useNavigate()
    const [userDetails,setUser] = useState([])
    const [serachInput,setSearchInput]=useState('')



// ******** USER LIST DATA RESPONSE STORING FUNCTION ********//
    useEffect(()=>{
        
        UserListDetails().then((response)=>{
            const userData = response.data.userData;
            setUser(userData)
        }).catch((error)=>console.log(error))
    },[]) 

    
//*********** USER DATA SEARCHING SECTION **********// 
  const userData = userDetails.filter(userDetails => {
    const searchInputLower = serachInput.toLowerCase();
    const emailMatch = userDetails.email.toLowerCase().includes(searchInputLower);
    const nameMatch = userDetails.name.toLowerCase().includes(searchInputLower);
    const mobMatch = userDetails.mobile.toString().includes(searchInputLower);
  
    return emailMatch || nameMatch || mobMatch;
  });


  
// ***********  USER SEARCH COTROLLING SECTION ********//
const handleSearchInput = (e) =>{
    setSearchInput(e.target.value)
  }

  //********* USER LIST DATA DELETEING SECTION  ********//  
  const handleDelete = async (userId) =>{
    DeleteUser(userId).then(() =>{
      setUser(userData.filter((user => user._id !== userId)))
    }).catch((err) => console.log(err))
  }


  return (
    
    <Card className="h-full w-full overflow-scroll">
        <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              onChange={handleSearchInput}
              value={serachInput}
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-100 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData.map((values,index) => (
            <tr key={values._id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {index+1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {values.name}
                </Typography>               
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {values.mobile}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {values.email}
                </Typography>
              </td>
              <td className="p-4">
                <div className=" ">
                <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                  <Button  onClick={()=>navigate(`/admin/edituser/${values._id}`)} >Edit</Button>
                </Typography>
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <Button onClick={() => handleDelete(values._id)}>Delete</Button>
                </Typography>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
} 
