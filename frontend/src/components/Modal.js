import React from 'react';
import google from '../Google.png';

const Modal = ({ job, closeModal }) => {
  return (
    <div className="modal d-flex justify-cntent-center align-items-center">
      <div className="modal-box h-75 w-50 rounded-3 border-3">
        <div className='modal-content p-2 h-100 w-100'>
          <div className="modal-header">
            <img className='logo' src={google}></img>
            <div className="details ms-3">
              <div className="role"><bold>{job.role}</bold></div>
              <div className="location-company"><span className='fw-light'>{job.location} and </span><span className='fw-light'>{job.company}</span></div>
            </div>
            <div className="close ms-auto" onClick={closeModal}>&times;</div>

          </div>
          <h4 className='fw-normal ms-3 mt-2'>Description</h4>
          <div className='description ms-3 mt-2 me-1 pe-5'>{job.description}</div>
          {/* Add any other job details you want to display */}
          <button className='apply rounded-5 m-auto'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import React from 'react';

// const Modal = ({ job, closeModal }) => {
//   return (
//     <div className="bg-primary w-50 h-50 modal" onClick={closeModal}>
//       <div className="d-row w-50 h-50 modal-content">
//         <span className="close" onClick={(e) => e.stopPropagation()}>&times;</span>
//         <h2>{job.title}</h2>
//         <p>{job.description}</p>
//         <button onClick={() => alert('Apply Now')}>Apply Now</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;