import React from 'react';
import './JobCard.css'; // Make sure to create this CSS file

export default function JobCard({ job, onClick, selectedJob }) {
  return (
    <div className="job-card" style={job?.title === selectedJob?.title ? {
      border:'1px solid gray'
    } :{}} onClick={onClick}>
      <h2 className="job-title">{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Category:</strong> {job.category}</p>
    </div>
  );
}
