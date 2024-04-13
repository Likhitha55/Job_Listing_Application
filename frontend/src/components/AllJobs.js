import React from 'react'
import pic from '../profile.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateJobForm from './UpdateJobForm';

function AllJobs() {

  const [jobs, setJobs] = useState([]);
  const [jobid, setJobId] = useState();
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [handleCloseUpdateForm, setHandleCloseUpdateForm] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    async function fetchJobs() {
      try {
        // const response = await axios.get('/api/jobs');
        // setJobs(response.data);

        const response = await axios({
          method:"get",
          baseURL: "https://job-listing-application-backend-tau.vercel.app/api",
          url: "jobs"
        })
        setJobs(response.data)
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }fetchJobs();
  }, []);

  const handleUpdate = (jobId) => {
    setSelectedJobId(jobId);
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedJobId(null);
  };


  const handleDelete = async (jobId) => {
    setJobId(jobId);
    // console.log(jobId);
    // console.log("in hndle delete")
    try {
      await axios.delete("https://job-listing-application-backend-tau.vercel.app/api/jobs/delete/" + jobId);
      setJobs(jobs.filter(job => job._id !== jobId));
      alert('Job deleted Successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div className=''>
    <div className='grid-container'>
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
    
    <main className='main-container m-0'>
        <h1>All Jobs</h1>
        <table className='tbl'>
          <thead className='thd'>
            <tr>
              <th>Role</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='tbdy'>
            {jobs.map(job => (
              <tr key={job._id}>
                <td>{job.role}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>
                  <button className='button' onClick={() => handleUpdate(job._id)}>Update</button>
                  <button className='button' onClick={() => handleDelete(job._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {isUpdateModalOpen  && (
        <div className="modal d-flex flex-column justify-cntent-center align-items-center">
        <div className="modal-box p-0 rounded-3 border-3">
          <div className='d-flex'>
          <span className='fs-2 m-1 ps-1 text-center'>Update Job</span>
          <span className="close fs-1 ms-auto me-2" onClick={handleCloseUpdateModal}>&times;</span>
          </div>
          
          <UpdateJobForm jobId={selectedJobId} onUpdate={handleCloseUpdateModal} />
        </div>
      </div>
      )}

    </div>
    </div>
  )
}

export default AllJobs
