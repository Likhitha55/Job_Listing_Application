import React from 'react';
import { useLocation } from 'react-router-dom';
import JobCard from './JobCard';
import Pagination from './Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import logo from '../Logo.png';
import bell from '../Notificationbell.svg';
import pic from '../profile.jpg';

function SearchPage() {
    const navigate = useNavigate();
    const { searchQuery } = useLocation().state;
    console.log("value in searchquery",searchQuery);

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [jobsPerPage, setJobsPerPage] = useState([6]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job, setJob] = useState(null);

    axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchData = async () => {
        try {
            console.log('Hitting API...');
            const query= searchQuery;
            console.log(query);
            const response = await axios.post('https://job-listing-application-backend-tau.vercel.app/api/jobs/search', { query });
            console.log('Came back from API');
            setFilteredJobs(response.data);
        } catch (error) {
            console.error('Error searching jobs:', error);
        }
    };
    fetchData();
}, [searchQuery]);


  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
//   try{
//   console.log(searchQuery);
//   console.log("Hitting api...");
//   const response = axios.post('http://localhost:8080/api/jobs/search', { searchQuery });
//   console.log("Came back from api");
//   setFilteredJobs(response.data);
//   console.log(filteredJobs);
//   }catch (error) {
//     console.error('Error searching jobs:', error);
//   }

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-3">
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
                    <a class="nav-link" href="#">admin</a>
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
        <hr></hr>
        <p className=' ms-5 me-5 mt-3 ps-2'>Suggested jobs based on your search</p>
      <div className="row ms-5 me-5 mt-5 p-0">
        {currentJobs.map((filteredJobs) => (
          <JobCard key={filteredJobs._id} job={filteredJobs} openModal={openModal}/>
        ))}

        {isModalOpen && <Modal job={selectedJob} closeModal={closeModal} />}
        <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={paginate} currentPage={currentPage} />
      </div>
        <hr></hr>
      <div id="footer" class="mt-4 p-0 d-flex justify-content-around">
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



      {/* <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={filteredJobs.length}
        paginate={paginate}
        currentPage={currentPage}
      /> */}
    </div>
  );
}

export default SearchPage;
