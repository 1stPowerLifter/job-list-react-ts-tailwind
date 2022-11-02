import { fetchJobs } from 'api/api';
import React, { useEffect, useState } from 'react';
import { IJob } from 'type/IJob';
import JobItem from './JobItem/JobItem';
import List from './List/List';

function App() {
  const [jobs, setJobs] = useState<IJob[]>([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const res = await fetchJobs()
      setJobs(res)
    } catch (e) {
      alert(e)
    }
  }

  console.log(jobs)
  return (
    <List
      items={jobs}
      renderItem={(job: IJob) =>
        <JobItem
          onClick={() => { }}
          job={job}
          key={job.id}
        />}

    />
  );
}

export default App;
