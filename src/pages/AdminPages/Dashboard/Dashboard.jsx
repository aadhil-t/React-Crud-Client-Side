import React from 'react'
import UserList from '../../../components/AdminComponents/UserList/UserList'
import AdminHeader from '../../../components/AdminComponents/AdminHeader/AdminHeader'
function Dashboard() {
  return (
    <div>
      <AdminHeader/>
      <UserList/>
    </div>
  )
}

export default Dashboard
