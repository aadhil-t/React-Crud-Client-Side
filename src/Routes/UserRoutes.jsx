import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/UserPages/Signup/Signup'
import Login from '../pages/UserPages/Login/Login'
import Home from '../pages/UserPages/Home/Home'
import Profile from '../pages/UserPages/Profile/Profile'
import UserPublic from './UserPublic'
import UserProtect from './UserProtect'
function UserRoute(){
return(
    <Routes>
         <Route  path='/signup' element={<Signup />} />
         <Route  path='/login' element={<UserPublic><Login /></UserPublic>} />
         <Route  path='/' element={<UserProtect><Home /></UserProtect>} />
         <Route  path='/profile' element={<UserProtect><Profile /></UserProtect>} />

    </Routes>
)
    
}

export default UserRoute