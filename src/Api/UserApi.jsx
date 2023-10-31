import axios from "axios";


// ******** USER SIGN UP  DATA PASSING SECTION **********//
export const userApi = axios.create({
    baseURL: `http://localhost:4000`
})

export async function userReg(signupData){
    try {
        const data= await userApi.post('/signup',signupData)
        return data
    } catch (error) {
        console.log(error.message);
    }
}


// ******** USER LOGIN DATA PASSING SECTION **********//
export async function userLogin(loginData){
    try {
        const data = await userApi.post('/login',loginData)
        return data
    } catch (error) {
        console.log(error.message)
    }
}


// ******** USER IMAGE UPDATING DATA PASSING SECTION **********//
export async function userImage(id,images){
    try {
        const data = new FormData();
            data.append('image',images);
            data.append('userId',id);
            const config={
                header:{
                    'content-type':'multipart/form-data',
                    userId :id
                },withCreadentials:true
            }
        const response = await userApi.post('/profileImage',data,config);
        return response;
    } catch (error){
        console.log(error)
    }
        
    }
