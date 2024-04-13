import React from 'react'
import pic from '../profile.jpg';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';


function Sidebar() {

  const navigate = useNavigate();

  const handleDashboardClick=()=>{
    navigate("/dashboard");
  }
  const handleAllJobsClick=()=>{
    navigate("/alljobs");
  }
  const handlePostJobClick=()=>{
    navigate("/postjob");
  }

  return (
    <aside id="sidebar">
      <div className='sidebar-header'>
          <div className='side-header-wish'>
            <h5>Welcome back<br/>Likhitha!</h5>
          </div>
          <div className='pic'>
            <img id="profile" src={pic}/>
          </div>
          <span className='icon close-icon'>X</span>
      </div>
      
      <div className='sidebar-list'>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'><a href="/dashboard">Dashboard</a></li>
        <li className='sidebar-list-item'><a href="/alljobs">All Jobs</a></li>
        <li className='sidebar-list-item'><a href="/postjob">Post Job</a></li> 
        <li className='sidebar-list-item'><a href="" >Settings</a></li>
      </ul>
      </div>
    </aside>
  )
}

export default Sidebar
