import {Navigate} from 'react-router-dom'

function UserPublic(props){
    if(localStorage.getItem('token')){
        return <Navigate to='/' />
    }else{
        <Navigate to='/login'/>
        // eslint-disable-next-line react/prop-types
        return props.children;
    }
}

export default UserPublic;