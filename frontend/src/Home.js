import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import Pagination from './components/Pagination';
import SearchPage from './components/SearchPage';
import Modal from './components/Modal';
import axios from 'axios';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo.png';
import search from './searchicon.png';
import srch from './search.svg';
import location from './Location.svg';
import pic from './profile.jpg';
import bell from './Notificationbell.svg';
import pic1 from './pic_1.jpg';
import pic2 from './pic_2.jpg';
import pic3 from './pic_3.jpg';
import pic4 from './pic_4.jpg';
import pic5 from './pic_5.jpg';
import pic6 from './pic_6.jpg';
import pic7 from './pic_7.jpg';

function Home(){

  // State variables
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [noJobs, setNoJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [value, setValue] = useState('');

  const handleSearchChange = (e) => {
    // setSearchQuery(e.target.value);
  };

  // Function to handle search query change
  const handleSearchSubmit = async  (e) => {
    if (e && e.target && e.target.value) {
      console.log(e.target.value);
      const searchQuery = e.target.value;
      // setSearchQuery(e.target.value);
    // setSearchQuery(event.target.value);
    // Filter jobs based on search query
    // const response = axios({
    //   method:"get",
    //   baseURL: "http://localhost:8080/api",
    //   url: "jobs"
    // })
    // setJobs(response.data)
    // console.log(jobs);
    
      navigate("/searchpage",{state:{searchQuery}});
      // const query = e.target.value;
      // console.log(query);
      // const response = await axios.post('https://job-listing-application-backend-tau.vercel.app/api/jobs/search', { query });
    //   const response = await axios({
    //   method:"get",
    
    //   baseURL: "http://localhost:8080/api/",
    //   url: "jobs/search??query=${encodeURIComponent(query)}"
    // });
    // setFilteredJobs(response.data);
    // }catch (error) {
    //   console.error('Error searching jobs:', error);
    // }
    // const filtered = jobs.filter(job =>
    //   job.role.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //   job.company.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    
    // console.log(filteredJobs);
  }
  // else{
  //   console.error('Invalid event or event target:', e);
  //  }
   }

 // Fetch job data from backend
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

    const handleButtonClick = (buttonValue) => {
      const searchQuery = buttonValue;
      // setValue(buttonValue);
      // Handle button click here
      // console.log("Button clicked with value:", buttonValue);
      // console.log("Data in value",searchQuery);
      navigate("/searchpage",{state:{searchQuery}});
      // Example: Navigate to another page with the button value as a parameter
      // history.push(`/other-page/${buttonValue}`);
      
    };

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle "More details" button click
  const handleMoreDetails = (job) => setSelectedJob(job);

  // Close modal
  

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="container" class="container-fluid">
      <div id="content" class="">
        <div id="header" class="ms-5 me-5">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid p-0">
              <img id='brandlogo' src={logo} />
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item ms-2">
                    <a class="nav-link" aria-current="page" href="#">Feed</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                  </li>
                  <li class="nav-item fw-bold">
                    <a class="nav-link" href="#">Jobs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/admin">admin</a>
                  </li>
                </ul>
                <div class="d-flex">
                  <img class="me-3" src={bell} />
                  <img id="profile" src={pic} />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <hr id="line"></hr>
        <div id="banner" class="ms-5 me-5 mb-5 rounded-4">
          <div id="pics-on-banner" class="d-flex  bg- justify-content-around align-items-center ms-5 me-5">
            <img id="pic1" src={pic1}></img>
            <img id="pic2" src={pic2}></img>
            <img id="pic3" src={pic3}></img>
            <img id="pic4" src={pic4}></img>
            <img id="pic5" src={pic5}></img>
            <img id="pic6" src={pic6}></img>
            <img id="pic7" src={pic7}></img>
          </div>
          <div id="heading-on-banner" class=" d-flex fw-bold d-flex flex-column justify-content-center align-items-center ms-5 me-5">
            <h1 class="text-white fw-bold">Search for your next job</h1>
            <p class="text-white">When you're searching for a job, there are a few things you can do to
              get the most out of your search</p>
          </div>
          
        </div>
        <div id="searchbar" class=" d-flex justify-content-center align-items-center border m-0 p-0 rounded-5 bg-white text-center translate-middle-x
          d-flex justify-content-center align-items-center w-75">
            <img id="searchicon" class="p-0 ms-2" src={search}/>
              <input id="searchbox" type="text" onChange={handleSearchChange} onKeyDown={(e) =>{if(e.key==='Enter'){e.preventDefault();handleSearchSubmit(e);}}} class="p-0 ms-3 me-2 w-100 fw-bold" placeholder="job title, keyword or company"/>
              <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length > 0 ? filteredJobs.length : noJobs.length} paginate={paginate} currentPage={currentPage} />
              <div id="locdiv" class="d-flex justify-content-center me-3 rounded-5 w-25 align-items-center">
              <img id="location" class=" d-flex justify-content-center align-items-center" src={location}/>
              <span><p class="m-1">Any location</p></span>
            </div>
          </div>
        <p class="m-5 p-3 d-flex justify-content-center align-items-center">You can also <b>Post a job </b> or <b> Post your resume</b></p>
        <h5 class="ms-5 me-5">Suggested job searches</h5>
        
        <div id="suggestions" class="p-5 d-flex flex-wrap justify-content-around align-items-center">

          <div id="suggestion1" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Software Engineer" onClick={() => handleButtonClick("Software Engineer")}><b>Software Engineer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion2" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Frontend developer" onClick={() => handleButtonClick("Frontend developer")}><b>Frontend developer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion3" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Java developer" onClick={() => handleButtonClick("Java developer")}><b>Java developer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion4" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Backend engineer" onClick={() => handleButtonClick("Backend engineer")}><b>Backend engineer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion5" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="SQL developer" onClick={() => handleButtonClick("Software Engineer")}><b>SQL developer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion6" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Devops" onClick={() => handleButtonClick("Devops")}><b>Devops</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion7" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Full stack intern" onClick={() => handleButtonClick("Full stack intern")}><b>Full stack intern</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion8" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="React developer" onClick={() => handleButtonClick("React developer")}><b>React developer</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion9" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="SDE intern" onClick={() => handleButtonClick("SDE intern")}><b>SDE intern</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

          <div id="suggestion10" class="m-3 d-flex justify-content-center align-items-center border w-auto rounded-5">
          <button type="submit" class=" me-0 bg-transparent rounded-2" value="Data scientist" onClick={() => handleButtonClick("Data scientist")}><b>Data scientist</b></button>
          <img id="srchicon" class="mt-1 bg-transparent rounded-3" src={srch}/>
          </div>

        </div>


        <div className="container mt-3">
        <h5 class="mt-3 ms-3 me-5 mb-5 ">Recommended for you</h5>
        <div className="row">
          {currentJobs.map((job) => (
            <JobCard key={job._id} job={job} openModal={openModal}/>
          ))}
        </div>
        {isModalOpen && <Modal job={selectedJob} closeModal={closeModal} />}
        <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} currentPage={currentPage} />

        </div>

        <hr></hr>

        <div id="footer" class="d-flex justify-content-around">
          <div id="footer-col">
            <p class="mb-2"><b>Booking support</b></p>
            <ul type="none" class="ps-0">
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">COVID-19</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Help Center</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Support</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Trust & Safety</a></li>
            </ul>
          </div>
          <div id="footer-col">
          <p class="mb-2"><b>Community</b></p>
          <ul  type="none" class="ps-0">
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Against Discrimination</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Invite Friends</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Gift cards</a></li>
            </ul>
          </div>
          <div id="footer-col">
          <p class="mb-2"><b>About</b></p>
          <ul  type="none" class="ps-0">
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">How it works</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Careers</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">About us</a></li>
              <li class="pb-2"><a href="#" class="text-decoration-none text-black fw-light">Media</a></li>
            </ul>
          </div>
          <div id="footer-col">
          <p class="mb-2"><b>Become an employer</b></p>
          <ul type="none" class="ps-0">
              <li class="pb-2"><a href="#" class="pb-1 text-decoration-none text-black fw-light">Post you job</a></li>
              <li class="pb-2"><a href="#" class="pb-1 text-decoration-none text-black fw-light">Business account</a></li>
              <li class="pb-2" ><a href="#" class="pb-1 text-decoration-none text-black fw-light">Resource Center</a></li>
              <li class="pb-2"><a href="#" class="pb-1 text-decoration-none text-black fw-light">Community</a></li>
            </ul>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Home
