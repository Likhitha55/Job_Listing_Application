import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import pic from '../profile.jpg';
import sideBar from './Sidebar.js'

import { useNavigate } from 'react-router-dom';
import sidebar from './Sidebar';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


function Dashboard() {

  axios.defaults.withCredentials = true;

  const [totalJobs, setTotalJobs] = useState(0);
  const data = [
    {
      name: 'Backend',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Web',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Testing',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Devop',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Support',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'HR',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'QA',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  // useEffect(() => {
  //   console.log("In useefect")
  //   const fetchTotalJobs = async () => {
  //     try {
  //       const response = await axios.get('/api/jobs/total');
  //       setTotalJobs(response.data.totalJobs);
  //     } catch (error) {
  //       console.error('Error fetching total jobs:', error);
  //     }
  //   };

  //   fetchTotalJobs();
  // }, []);


  useEffect(() => {
    async function fetchJobs() {
      try {
        // const response = await axios.get('/api/jobs');
        // setJobs(response.data);

        const response = await axios({
          method:"get",
          baseURL: "https://job-listing-application-backend-tau.vercel.app/api",
          url: "jobs/total"
        })
        setTotalJobs(response.data.totalJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }fetchJobs();
  }, []);


  return (

    <div className='grid-container'>
      {/* <div className='header'>
        <div className='menu-icon'>

        </div>
        <div className='header-left'>

          <a href='#'>Homepage</a>
        </div>
        <div className='header-right ms-auto me-3'>
          <a className='logout'>Logout</a>
        </div>


      </div> */}
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
        <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h4 className='fw-normal'>Total Jobs</h4>
            </div>
            <h1 className='fw-normal ps-2'>{totalJobs}</h1>
          </div>

          <div className='card'>
            <div className='card-inner'>
              <h4 className='fw-normal'>Users</h4>
            </div>
            <h1 className='fw-normal ps-2'>300</h1>
          </div>

          <div className='card'>
            <div className='card-inner'>
              <h4 className='fw-normal'>Hired</h4>
            </div>
            <h1 className='fw-normal ps-2'>192</h1>
          </div>

          <div className='card'>
            <div className='card-inner'>
              <h4 className='fw-normal'>Actions Pending</h4>
            </div>
            <h1 className='fw-normal ps-2'>30</h1>
          </div>
        </div>


        <div className='charts'>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={700}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>

          {/* Linechart */}

          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


        </div>

      </main>

    </div>
  )
}

export default Dashboard
