import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const JobModal = ({ job, closeModal }) => {
  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{job.role}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.country}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p><strong>Description:</strong> {job.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
        <Button variant="primary" onClick={() => console.log('Apply Now')}>Apply Now</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobModal;