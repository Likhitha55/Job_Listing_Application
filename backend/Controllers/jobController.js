const Job = require('../models/job');

exports.getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find();
      console.log('Jobs fetched successfully:', jobs); 
      res.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

  exports.createJob = async (req, res) => {
    const job = new Job(req.body);
    try {
      const newJob = await job.save();
      res.status(201).json(newJob);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  exports.getJobsCount = async (req, res) => {
    // console.log("In getJobsCount")
    try {
      const totalJobs = await Job.countDocuments();
      res.json({ totalJobs });
    } catch (error) {
      console.error('Error fetching total jobs:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.deleteJob = async (req, res) => {
    // console.log('In delete job controller')
    try {
      await Job.findByIdAndDelete(req.params.jobId);
      res.json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  exports.updateJob = async (req, res) => {
    // console.log('In controller');
    const { jobId } = req.params;
    const { role, company, salary, location, type, country, description} = req.body;
  
    try {
      const updatedJob = await Job.findByIdAndUpdate(jobId, { role, company, salary, location, type, country, description }, { new: true });
      // console.log('updated successfully');
      res.json(updatedJob);
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  exports.getJobById = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (job == null) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.searchJobs = async (req,res) => {
    console.log("Here");
    // Implement API call to search jobs based on query
    const { query } = req.body;
    // console.log("Query in controller",query);
  try {
    // Use Mongoose's find() method to search for jobs based on the query
    const jobs = await Job.find({
      $or: [
        { role: { $regex: query, $options: 'i' } }, // Case-insensitive regex match for role
        { company: { $regex: query, $options: 'i' } } // Case-insensitive regex match for company
      ]
    });

    res.json(jobs);
    // console.log(jobs);
  } catch (error) {
    console.error('Error searching for jobs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  };