import React from 'react';

export default function JobDetails({ job }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Description:</strong> {job.description}.</p>
    </div>
  );
}
