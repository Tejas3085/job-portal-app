import { useEffect, useState } from 'react';
import './App.css';
import JobCard from './Job/JobCard';
import jobsData from './jobs.json';
import JobDetails from './Job/JobDetails';
import Button from './Job/Button';
const categories = ["All", "IT", "Design"];

function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);
  const [allfilter, setAllFilter] = useState(['All']);
  const filtered = !allfilter.includes("All") ? jobs.filter(item => allfilter.includes(item.category)) : jobs;

  useEffect(() => {
    if (allfilter.length === 0) {
      setAllFilter(['All'])
    }
  }, [allfilter]);

  function setAllFilters(btn) {


    if (allfilter.includes('All')) {
      const removedFilter = allfilter.filter(category => category !== 'All');
      setAllFilter(removedFilter)
    }

    if (!allfilter.includes(btn)) {
      setAllFilter((prev) => [...prev, btn])
    } else {
      const removedFilter = allfilter.filter(category => category !== btn);
      setAllFilter(removedFilter)
    }
    if (btn === 'All') {
      setAllFilter(['All'])

    }

  }

  function onInputChange(e) {
    let input = e.target.value.toLowerCase();
    if (input.length) {
      let serchedData = jobs.filter(item => item.title.toLowerCase().includes(input))
      setJobs(serchedData);
    } else {
      setJobs(jobsData);
    }
  }

  function handleToggle(e){
   if(e.target.checked){
    document.querySelector('.nm-main').style.backgroundColor= 'black'
   }else{
    document.querySelector('.nm-main').style.backgroundColor= 'beige'

   }
  }
  return (
    <div className='nm-main'>
      <div className='nm-input'>
        <input
          type="search"
          placeholder="Search jobs..."
          className='searchBox'
          onChange={(e)=>onInputChange(e)}
          onFocus={(e) => (e.target.style.border = '1px solid #0073b1')}
          onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
        />
      </div>

      <div className='filterButtons'>
        <div className='nm-filterbtn'>
        {
          categories.map(item =>
            <Button key={item} btn={item} allfilter={allfilter} onClick={(btn) => setAllFilters(btn)} />
          )
        }
        </div>
        <div className="toggle-container">
          <label className="switch">
            <input onClick={handleToggle} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

      </div>
      <div className="app-container">

        <div className="job-list">
          {filtered.map(job => (
            <JobCard key={job.id} job={job} selectedJob={selectedJob} onClick={() => setSelectedJob(job)} />
          ))}
        </div>
        <div className="job-details">
          {selectedJob ? (
            <JobDetails job={selectedJob} />
          ) : (
            <p style={{ padding: '20px' }}>Click on a job to view details</p>
          )}
        </div>
      </div>
    </div>
  );

}

export default App;
