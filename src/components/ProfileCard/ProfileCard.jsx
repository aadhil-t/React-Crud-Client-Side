import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userImage } from "../../Api/UserApi";
import { setUserDetails } from "../../Redux/UserSlice/UserSlice";

export default function  ProfileCard() {

  const [images,setImages] = useState(null);
  const dispatch = useDispatch();
  const {id,name,mobile,email,image} = useSelector(state =>state.user)

  const handleupdateImage = async(e)=>{
    e.preventDefault(); 
    const response = await userImage(id,images);
    if(response.data.updated){
      dispatch(setUserDetails({
        id:response.data.data._id,
        name:response.data.data.name,
        mobile:response.data.data.mobile,
        email:response.data.data.email,
        image:response.data.data.image,
        is_admin:response.data.data.is_admin,
      }))
    }
  }
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={image ? `/images/${image}`:"/images/_uhdwomen129.jpg"} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Name:{name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Number:{mobile}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Email:{email}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
            <input type="file" accept="/image/*" onChange={(e) =>setImages(e.target.files[0])}/>
            <div>
              <Button onClick={handleupdateImage}>Submit</Button>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
