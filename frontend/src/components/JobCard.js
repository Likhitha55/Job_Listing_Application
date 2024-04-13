import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import google from '../Google.png';



const JobCard = ({ job,openModal}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

//  const openModal = () => {
//     console.log('Opening modal for job:', job);
//     setIsModalOpen(true);
//   }; 

  // const closeModal = () => {
  //   console.log('Closing modal');
  //   setIsModalOpen(false);
  // };


  return (
    
    <div className="col-md-4 mb-5" onClick={() => openModal(job)}>
      <div className="card" >
        <div className="card-body border-2">
            <div>
                <img className="companylogo ms-4 mt-3 rounded-4" src={google}></img>
            </div>
          <h5 className="card-title ms-1 mt-2 pt-4 fw-bold">{job.role}</h5>
          
          <span className="card-text m-1">{job.country}</span>
          <span className="w-50 ms-2 fw-bolder text-secondary"><b>.</b></span>
          {/* <span class="row" ><b>.</b></span> */}
          <span className="card-text m-2">{job.company}</span><br/>
          <p className ="w-50 rounded-4 ms-3 p-1 bg-light card-text ms-0 ps-0 mt-3"><b>{job.salary} per month</b></p>
          {/* <p><button className="btn btn-primary" onClick={() => handleMoreDetails(job)}>More Details</button></p> */}
          {/* {isModalOpen && <Modal job={job} closeModal={closeModal} />} */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;