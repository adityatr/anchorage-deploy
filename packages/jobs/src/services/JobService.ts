import {UUID} from '../types';

interface JobService {
  createJob: (config: JobConfig) => void;
  getJob: (id: UUID) => Job;
  deleteJob: (id: UUID) => void;
  listJobs: () => Job[];
}

export default JobService;
