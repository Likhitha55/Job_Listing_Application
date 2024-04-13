import React from 'react';
import pic from '../profile.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';

function PostJob() {

  axios.defaults.withCredentials = true;

  const [formData, setFormData] = useState({
    role: '',
    company: '',
    salary: '',
    location: '',
    type: '',
    country: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API endpoint
      const response = await axios.post("https://job-listing-application-backend-tau.vercel.app/api/jobs", formData);
      // Handle the response if needed
      alert('New Job Posted Successfully')
      console.log("Job posted successfully:", response.data);
      // Optionally, you can redirect the user to another page after posting the job
      // history.push("/alljobs");
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className='grid-container'>
      <aside id="sidebar">
        <div className='sidebar-header'>
          <div className='side-header-wish'>
            <h5>Welcome back<br />Likhitha!</h5>
          </div>
          <div className='pic'>
            <img id="profile" src={pic} />
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

      <main className='main-container'>
        <div className='container d-flex flex-column h-100 w-100 '>
          <form className='form m-0 p-0 d-flex flex-column' onSubmit={handleSubmit}>
            <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            <input type="text" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
            <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <button className='btn m-auto mt-2 bg-white' type="submit">Post Job</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default PostJob
