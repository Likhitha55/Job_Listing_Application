import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function UpdateJobForm({jobId, onUpdate}) {
  
  const [updateJobId, setUpdateJobId] = useState(jobId);
    // setUpdateJobId(jobId);
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        salary: '',
        location: '',
        type: '',
        country: '',
        description: ''
      });

      useEffect(() => {
        setUpdateJobId(jobId); // Initialize updateJobId when component mounts
      }, [jobId]);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // console.log('calling backend api')
          const response = await axios.put(`https://job-listing-application-backend-tau.vercel.app/api/jobs/update/${updateJobId}`, formData);
          alert('Job Updated Successfully! Refresh the page to see changes')
          onUpdate(response.data); // Pass updated job data to parent component
        } catch (error) {
          console.error('Error updating job:', error);

        }
      };

  return (
    
    <form className='form m-0 p-0 d-flex flex-column' onSubmit={handleSubmit}>
    <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
    <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
    <input type="text" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
    <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
    <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
    <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
    <button className='btn m-auto mt-2 bg-white' type="submit">Save</button>
  </form>
  )
}

export default UpdateJobForm
