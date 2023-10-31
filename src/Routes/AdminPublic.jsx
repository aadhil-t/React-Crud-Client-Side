import {Navigate} from 'react-router-dom'

function AdminPublic(props){
    if(localStorage.getItem('admintoken')){
        return <Navigate to='/admin/dashboard' />
    }else{
        <Navigate to='/admin'/>
        // eslint-disable-next-line react/prop-types
        return props.children;
    }
}

export default AdminPublic;