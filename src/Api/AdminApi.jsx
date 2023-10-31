import axios from "axios";

const adminApi = axios.create({
    baseURL: `http://localhost:4000/admin`
})



// ******** ADMIN SIGN IN DATA PASSING AREA **********//
export async function Adminsignin(signinData){
    try{
        const data = await adminApi.post('/login',signinData);
        console.log("data");
        return data 
    }catch(err){
        console.log(err);
    }
}

// ******** ADMIN SECTION USER DATA PASSING SECTION **********//
export async function UserListDetails(){
    try{
        const data = await adminApi.get('/userlist')
        return data
    }catch(err){ 
        console.log(err);
    }
}


// ******** ADMIN SECTION USER EDITING DATA PASSING SECTION **********//
export async function EditUserData(userId){
    try{
        const data = await adminApi.get(`/editUser/${userId}`)
        return data
    }catch(err){
        console.log(err);
    }
}


// ******** ADMIN SECTION USER UPDATING DATA PASSING SECTION **********//
export async function UpdateUser(id,updateUserData){
    try{
        const {name,email,mobile} = updateUserData
        console.log(mobile);
        const data = await adminApi.post('/updateuser',{id,name,email,mobile})
        return data
    }catch(err){
        console.log(err);
    }
}

// ******** ADMIN SECTION USER DELETING DATA SECTION **********//
export async function DeleteUser(userid){
    try{
        const data = await adminApi.post('/deleteUser',{userid});
        return data
    }catch(err){
        console.log(err);
    }
}
