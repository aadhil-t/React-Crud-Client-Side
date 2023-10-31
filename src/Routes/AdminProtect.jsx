import {Navigate} from 'react-router-dom'

function AdminProtect(props){
    if(localStorage.getItem('admintoken')){
        // eslint-disable-next-line react/prop-types
        return props.children;
    }else{
        return <Navigate to='/admin' />
    }
}

export default AdminProtect;